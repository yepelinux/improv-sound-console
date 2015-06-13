::dir audios /a-d /b /s >> audios.json
@ECHO OFF
setlocal enableextensions enabledelayedexpansion
echo var audios=[  > audios.json
for /f "tokens=1* delims=\" %%A in (
  'forfiles /s /m *.mp3 /c "cmd /c echo @relpath"'
) do for %%F in (^"%%B) do echo { name: "%%~F"}, | tr \\ "/" >> audios.json
::for /R %%i in (*.*) do echo { name: "%%i%"}, | tr \\ "/" >> audios.json
echo ]  >> audios.json
start funcionero.html