# Using-alphavantage-to-see-cryptocurrency-price-changes-daily
server.js creates 'THIsSHELL.csv' file and writes the name of the cryptocurrency(Bitcoin,Ethereum,Litecoin, and Nanocoin) and their costs the current and previous day
server1.js reades the csv file and in the console outputs the currencies with the highest gain procentage wise and the lowest gain or biggest loss percentage wise
note that server.js does not automatically run daily. To run daily on linux open the terminal and write 'sudo crontab -e' and write  'minute when to run hour when to run * * * path to server.js>dev/null 2>&1' for example '00 12 * * * /home/server.js>/dev/null 2>&1'
# BOTH of the files must be in the SAME DIRECTORY
