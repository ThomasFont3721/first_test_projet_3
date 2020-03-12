import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import Contacts from 'first-project/utils/contacts';
import ConfirmationMixin from 'ember-onbeforeunload/mixins/confirmation';

export default Route.extend(ConfirmationMixin, {
    onunload() {
        let model = this.modelFor(thi.routeName);

    },
    model() {
        return Contacts.create({ datas: this.get('store').findAll('contact') });
    },
    actions: {
        addContact(model) {
            if (!get(model, 'edit')) {
                let contact = this.get('store').createRecord('contact', { nom: get(model, 'nom'), prenom: get(model, 'prenom'), email: get(model, 'email') })
                contact.save();
                set(model, 'nom', '')
                set(model, 'prenom', '')
                set(model, 'email', '')
                set(model, 'visibilityAdd', !get(model, 'visibilityAdd'))
            } else {
                let contact = get(model, 'contact')
                set(contact, 'nom', get(model, 'nom'))
                set(contact, 'prenom', get(model, 'prenom'))
                set(contact, 'email', get(model, 'email'))
                contact.save()
            }
        },
        deleteContact(contact, model) {
            if (get(contact, 'isDeleted')) {
                contact.rollbackAttributes();
            } else {
                contact.deleteRecord();
                set(model, 'nom', '')
                set(model, 'prenom', '')
                set(model, 'email', '')
                set(model, 'edit', false)
                set(model, 'visibilityAdd', false)
            }
        },
        cancelDeleteForever(model) {
            get(model, 'deleteds').forEach(contact => {
                contact.rollbackAttributes();
            });
        },
        deleteForeverContact(model) {
            get(model, 'deleteds').forEach(contact => {
                contact.destroyRecord();
            });
        },
        showAddContact(model) {
            set(model, 'visibilityAdd', !get(model, 'visibilityAdd'))
            set(model, 'edit', false)
        },
        showEditContact(contact, model) {
            set(model, 'contact', contact)
            set(model, 'nom', get(contact, 'nom'))
            set(model, 'prenom', get(contact, 'prenom'))
            set(model, 'email', get(contact, 'email'))
            set(model, 'visibilityAdd', true)
            set(model, 'edit', true)
        }
    }
});
