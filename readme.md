# Gerimedica

This is a solution for the Gerimedica automation task
The website is not available in my country -Egypt- so the tests might fail and need minor tweaks,
but it shows the concept. I used a VPN for the first part and then the VPN got blocked

The Project is divided into two:
- e2e automation:
- API automation:
I decided to automate https://gorest.co.in/, as the other website is not available in my country, but it mainly shows the same concept

## Installation

you can use yarn to install it

```bash
yarn install
```

## Usage
To run and lunch the browser you can use
```bash
yarn cypress open
```
To run in the headless mood you can use:
```bash
yarn cypress run
```

To only run the web or api you can use this command
```bash
 yarn cypress run --spec cypress/e2e/{api or web}/
```
