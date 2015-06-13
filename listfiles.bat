@ECHO OFF
for /f "tokens=1* delims=\" %%A in (
  'forfiles /s /m *.mp3 /c "cmd /c echo @relpath"'
) do for %%F in (^"%%B) do echo %%~F