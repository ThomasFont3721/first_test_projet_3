@echo off
cd "C:\Program Files\MongoDB\Server\3.4\bin"
start mongod
ping 127.0.0.1 -n 10 > nul
start mongo

cd "C:\restheart"
start java -jar -Dfile.Encoding=UTF-8 restheart.jar

exit