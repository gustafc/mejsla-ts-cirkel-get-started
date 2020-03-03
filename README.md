# Kom-igång-repo för Mejslas TypeScript-cirkel

Detta repo innehåller länkar, tips och trix som kan vara praktiska för den Node-
och TypeScript-ovane.

Bra platser att börja på är:

- [TypeScripts webbplats](https://www.typescriptlang.org/)
- [Mejsla-cirkelns sida](https://mejsla.se/cirkel2020/) - kalendarium,
  (mail)adresser, telefonnummer, etc.
- [Node JS](https://nodejs.org/) - JavaScriptmotorn som kör vår kompilerade
  TypeScript.
- [Visual Studio Code](https://code.visualstudio.com/) - editor/IDE med bra 
  TS-stöd.

## Hello, world!

För att köra projektet - en "hello world" i TS - gör som följer:

1. Installera Node JS, enligt anvisningarna nedan
2. `npm install` - tankar ner beroenden och kompilerar
3. `npm test` - kör enhetstester (i filer med namn i stil med `foo.test.ts`)
3. `npm start` - kör huvudfilen (`lib/index.js`)

För att bygga explicit, kör `npm run build`.

## Installera Node

[Node JS](https://nodejs.org/) går att ladda ner att och installera direkt från
deras [nedladdningssida](https://nodejs.org/en/download/), men det är smidigare
att använda ett verktyg som låter en hoppa mellan versioner på ett enkelt sätt.

### NVM för Posix (Unix/Linux/MacOS)

För Posix-kompatibla system finns [NVM](https://github.com/nvm-sh/nvm), som
installeras direkt från terminalen.

När du installerat NVM enligt anvisningarna kan du installera senaste versionen
av Node med följande kommando:

    nvm install node

Du kan också installera en specifik version av Node:

    nvm install node 10.19.0

För att hoppa mellan olika installerade versioner använder man `nvm use`:

    nvm use 13.9.0

Alla dessa kommandon ändrar miljön för sessionen (den öppna terminalen) så att
kommandon som `node`, `npm` använder rätt version. Ett exempel på hur det kan se
ut när man byter versioner:

```shell
$ node -v # Skriv ut nuvarande Node-version
v13.9.0
$ nvm use 10.19.0 # Byt till äldre version
Now using node v10.19.0 (npm v6.13.4)
$ node -v # Vi använder plötsligt en annan Node!
v10.19.0
```

#### `.nvmrc`

När man påbörjar ett nytt projekt kan det även vara klokt att spara vilken
version av Node som ska användas, så att alla som använder projektet använder
samma version. För NVM kan man speca detta i en fil som heter
[`.nvmrc`](https://github.com/nvm-sh/nvm#nvmrc). Typiskt innehåller den bara
versionsnumret av Node man vill använda, till exempel `13.9.0`.

När man checkat ut ett projekt med en `.nvmrc` kan man automatiskt installera
och använda rätt Node-version genom att ställa sig i samma katalog som den filen
(normalt ligger den i repots rotkatalog) och sedan köra `nvm install`.

NVM har av någon anledning inget stöd för att automatiskt skriva en `.nvmrc`,
men den ~late~effektive kan använda en oneliner i stil med denna:

```bash
node -v | cut -c 2- > .nvmrc
```

### NVM för Windows 

[NVM for Windows](https://github.com/coreybutler/nvm-windows/) tillhandahåller
ungefär samma funktionalitet som Posix-NVM, se instruktionerna ovan. Tyvärr
stöds dock inte `.nvmrc`-filen.

## Webappar med TypeScript

Att få TS-stöd i de stora ramverken är idag hyfsat trivialt.

### React

För att skapa ett nytt, TS-baserat React-projekt har `create-react-app` en mall
för det ändamålet:

    npx create-react-app my-app --template typescript

För att sedan starta projektet:

    cd my-app
    npm start

### Angular

Angular kör TypeScript som standard. För att skapa nytt projekt:

    npx ng new my-app

För att sedan starta projektet:

    cd my-app
    npm start
