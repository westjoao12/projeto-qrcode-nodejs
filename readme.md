# Projeto QRCode & Password Generator

Este projeto é uma aplicação Node.js de linha de comando que permite ao usuário gerar QR Codes a partir de links ou criar senhas seguras personalizadas, conforme configurações definidas em um arquivo `.env`.

## 📁 Estrutura do Projeto

```
projeto-qrcode-nodejs/
│
├── .env           # Configurações de senha (caracteres permitidos, tamanho, etc)
├── .gitignore
├── package.json   # Dependências e scripts do projeto
├── src/
│   ├── index.js              # Ponto de entrada principal
│   ├── prompts-schema/
│   │   ├── prompt-schema-main.js      # Schema do prompt principal
│   │   └── prompt-schema-qrcode.js    # Schema do prompt para QR Code
│   └── services/
│       ├── password/
│       │   ├── create.js              # Lógica para criar senha
│       │   ├── handle.js              # Geração da senha
│       │   └── utils/
│       │       └── permitted-characters.js # Utilitário para caracteres permitidos
│       └── qr-code/
│           ├── create.js              # Lógica para criar QR Code
│           └── handle.js              # Geração e exibição do QR Code
```

## 🚀 Como Usar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Configure o arquivo `.env` para definir as regras de senha:
   ```
   UPPERCASE_LETTERS=false
   LOWERCASE_LETTERS=false
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   PASSWORD_LENGTH=12
   ```

3. Execute o projeto:
   ```sh
   npm start
   ```

4. Siga as instruções no terminal para escolher entre gerar um QR Code ou uma senha.

## 🏗️ Arquitetura

- **Prompt Schema**: Define os formulários interativos para o usuário escolher a funcionalidade e fornecer dados.
- **Services**: Cada funcionalidade (QR Code e Password) possui sua própria pasta, separando lógica de criação, manipulação e utilitários.
- **Utils**: Funções auxiliares, como definição de caracteres permitidos para senha.

## 📦 Dependências

- [`chalk`](https://www.npmjs.com/package/chalk): Para colorir as mensagens no terminal.
- [`prompt`](https://www.npmjs.com/package/prompt): Para criar prompts interativos no terminal.
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal): Para gerar e exibir QR Codes no terminal.

---

Desenvolvido para facilitar a geração de QR Codes e