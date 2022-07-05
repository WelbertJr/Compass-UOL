# React-Form-Challenge
Desafio de código. Criando um formulário com React.

# História
O cliente busca uma solução digital para permitir que as pessoas se inscrevam em seu programa de curso, busquem informações básicas e senha para um futuro login.

# Cenário
O PO quer que sejam entregues duas telas conforme exemplificado na plataforma Figma, seguindo padrões de responsividade e uma boa experiência do usuário.

# Requisitos obrigatórios:
Desenvolvimento de acordo com a criação dos designers no figma.
Validação de navegação (regex ou qualquer botão de registro) com base em dados preenchidos (entradas e caixa de seleção usando lógica JavaScript).
Responsividade (uso de flexbox/grid e media queries).
Para estilização, será permitido o uso da biblioteca StyleComponents (react library), mas não será permitido o uso de bibliotecas externas como bootstrap.
Largura principal do Media Querie: 768px
Componentes: a critério do desenvolvedor.
Usar o React Router para desenvolver o caminho entre as duas páginas.

# Validações:
* Nome: mais de 4 dígitos e um espaço.
* E-mail: apenas letras minúsculas permitidas e sem espaços, números, ponto final. e @.
* Senha: somente números, maior ou igual a 6 e menor que 9.
* Date Picker: A data não pode ter mais de 121 anos.
* Telefone: 11 dígitos específicos e não são permitidos caracteres ou letras especiais.
* Checkbox: Os termos devem ser aceitos. A página de sucesso só pode ser acessada se todos os campos dentro dos parâmetros.

# Apresentação

<p align="justify">
Para passar para a página de sucess o usuário deve fazer o login. Caso o padrão de login não seja seguido é apontada uma mensagem de erro informando que o padrão está incorreto, impedindo o usuário de prosseguir para a próxima página:
</p><br/>

<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/pagina1ReactForm.gif">
</p><br/>

<p align="justify">
Ao inserir nos inputs um padrão permitido, a mensagem de erro desaparece e o usuário consegue passar para a próxima página apertando o botão:
</p><br/>

<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/botao%20pagina%201.gif">
</p><br/>

<p align="justify">
Quando a resolução chega em 768px o layout se modifica, a validação dos inputs e exibição de mensagens de erro ainda acontecem:
</p><br/>

<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/responsividade.gif">
</p><br/>

## Tecnologias utilizadas:
<img alt="Html5" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /> <img alt=Trello src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" /> 
<img alt=VisualStudio src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" /> <img alt="Git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
<img alt="Css3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img alt="Html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
