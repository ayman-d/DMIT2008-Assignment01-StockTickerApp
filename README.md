# Stock Ticker App

---

### Overview

This app as a tool to help users get the latest data about a specific stock in the market.
The app requires a valid input of a stock ticker (symbol or company acronym) and will return the 
latest data pertaining to that stock ticker. 

<img src="https://puu.sh/HdOQo/d1e1486d11.png" alt="required input" />

The data sent back to the user will include the following pieces of information:

- The ticker symbol (i.e. IBM)
- The current closing price in USD
- The date of last closing
- The previous closing price
- The change <span style="color: red">amount</span> from previous to last closing
- the change <span style="color: red">percentage</span> from previous to last closing

<img src="https://puu.sh/HdOPv/bb50615975.png" alt="response" />

For a list of all stock ticker symbols please visit this link:

[Stock Ticker List](https://stockanalysis.com/stocks/) :paperclip:

---

### Overview

Looking up stock information can be overwhelming and confusing in many of the current high 
traffic websites, this app aims to provide an easy way to quickly lookup a specific stock 
and see how it's doing in the market.

---

### Running the project

The repo does not include the node_modules, please run `npm install` in the main project 
directory if you wish to clone it and run it locally

The package.json is already configured with:
- `npm run dev` command to run the project in development
- `npm run build` to build distrebution folder for production

This project also requires the
[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) extension. 
If you use it on VS Code, make sure to turn on "watch sass" option when editing the scss style sheets

---

### Dependancies

| Package                        | Purpose                                                       |
|--------------------------------|---------------------------------------------------------------|
| Parcel                         | Web application bundler with zero configuration needed        |
| HttpServer                     | Simple, zero configuration command line http server           |
| ejs                            | JS view template renderer                                     |
| babel                          | Bundle modules and node modules used in ES6 for older browser |

* 3 babel packages were used: @babel/core, @babel/plugin-transform-runtime, & @babel/preset-env

---

### Contributors

- [Ayman Al-Dali](https://github.com/ayman-d) :octocat:

---
