# Inventory_scan_dashbaord
##### This is a basic inventory web app the manages inventory for stores. Built with Adonisj(Node Framwork) and bootstrap & tailwindcss. It has a corresponding mobile ap the summarizes inventory info, and also youse to subtract and stock as well.

#### Setup
##### * Need to have node installed
##### * Clone repo
##### * Rename env.example to .env. Currently using postgress. Setup connection to your pg db.
##### * Migrate Tables (node ace migration:run).
##### * Mke sure you add (APP_URL=localhost:<portnumber>).
##### * See categories into db: (node ace db:seed).
##### * Run project (node ace serve --watch).
##### * Visit this url to signup (<baseurl>/auth-setup). visit route file to find all routes
##### * Thats all
