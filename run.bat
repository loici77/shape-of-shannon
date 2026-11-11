@echo off
title Shape of Shannon's - local server
cd /d "%~dp0"
echo.
echo   Shape of Shannon's
echo   ------------------------------------
echo   site  : http://127.0.0.1:5500/index.html
echo   admin : http://127.0.0.1:5500/admin.html
echo.
echo   Close this window to stop the server.
echo.
start "" http://127.0.0.1:5500/index.html
python -m http.server 5500 --bind 127.0.0.1
