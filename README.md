# Very Useful Tools to Remember
![Demosntração do layout](https://github.com/nuryaf/vuttr-front/blob/master/src/_demo/demo.gif)

## Tecnologias utilizadas
- ReactJs
- Javascript
- Axios

## Execução
> **Dica**: Para verificar o código de forma dinâmica, basta clicar na tecla ``.`` quando repositório do github estiver aberto em seu navegador ;)

- Clonar a [VUTTR Api](https://github.com/gustavo-startaideia/rest-fake-api)  e seguir os passos para sua execução;
- Clonar o repositório com o comando: ``https://github.com/nuryaf/vuttr-front``
- Dentro de ``api.js``, modificar o código para:
```
import axios from 'axios';
    const api = axios.create({
         baseURL: 'http://localhost:3000/tools',
     });
export default api;
```

- No terminal do projeto, instalar as dependências rodando o ``yarn``
- Para iniciar o projeto, rodar o ``yarn start``
