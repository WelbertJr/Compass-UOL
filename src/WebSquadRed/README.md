# WebsiteSquadRed
## Desafio
<p align="justify">
Eu, como um usuário, quero 3 páginas personalizadas para coletar dados através de formulários e lançar os dados coletados em uma 4ª página. O projeto deve ser feito utilizando o Adobe Experience Manager.
</p>

# Integrantes

* <a href="https://github.com/Jean-Stefan"> Jean Stefan</a>
* <a href="https://github.com/RafaelBrandaoBastos"> Rafael Brandão</a>
* <a href="https://github.com/WelbertJr"> Welbert Júnior</a>

# Apresentação

* No AEM o autor deve arrastar os componentes que criamos para montar o layout da página, clicando em cima do componente arrastado são abertas algumas caixas de diálogos onde o autor consegue editar e adicionar quantos componentes quiser:

<br/>
<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/ezgif.com-gif-maker%20(6).gif">
</p><br/>

<p align="justify">
<li>Na aba inicial do formulário existem alguns campos obrigatórios sinalizados com um asterisco. Ao tentar passar para a próxima aba sem preenchê-los, é exibida uma mesagem de erro:</li>
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/errorMessageP1.gif">
</p><br/>

<p align="justify">
<li>O campo de aniversário tem uma validação que determina que o usuário que está fazendo o cadastro do formulário tenha no mínimo 18 anos, assim sendo, caso ele insira uma data de aniversário menor que 18 anos, não vai ser permitida a passagem para a próxima aba de cadastro:
</p></li><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/dateInvalid18.gif">
</p><br/>

<p align="justify">
<li>O campo de aniversário também determina que a idade máxima aceita é de 121 anos, portanto se o usuário digitar uma idade superior a 121 anos também não vai ser perimitida a passagem para a próxima aba:
</p></li><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/dateInvalid121.gif">
</p><br/>

<p align="justify">
<li>Ao inserir uma data de aniversário válida e aceitar os termos de privacidade o usuário é direcionado para a aba seguinte:</li>
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/dateValid.gif">
</p><br/>

<p align="justify">
<li>Na aba "Social" o usuário deve preencher os campos de link do Linkdin e do GitHub, sendo o segundo de preenchimento obrigatório:</li>
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/nextButtonSocial.gif">
</p><br/>

<p align="justify">
<li>Na última aba do formulário os campos de "Team Name", "Instituition" e "Graduation" são de preenchimento obrigatório, nesse caso se o usuário tentar enviar o formulário sem preenchê-los, é exibida uma mesagem de erro:</li>
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/errorMessageP3.gif">
</p><br/>

<p align="justify">
<li>O usuário pode adicionar links de certificados preenchendo o campo de certificados e clicando em seguida no botão "More", ao adicionar um link ele pode ser exibido pelo botão "Certificates" que mostra a lista de links adicionados pelo botão More. Se o campo de certificados estiver vazio e houver um clique no botão More, é retornada uma mensagem de erro. Caso queira, o usuário pode remover um link adicionado clicando no X:
</p></li><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/addingCertificates.gif">
</p><br/>

<p align="justify">
<li>Só é permitida a adição de 5 certificados, quando o limite de 5 links é atingido o usuário é notificado de que deve remover um certificado da lista para conseguir fazer a adição do certificado desejado:
</p></li><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/messageOnly5Certificates.gif">
</p><br/>

<p align="justify">
<li>Quando o usuário preencher os campos obrigatórios e clicar no botão "Finish" é impressa uma aba que exibe todas as informções preenchidas pelo mesmo:
</p></li><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/finishButton.gif">
</p><br/>

<p align="justify">
<li>Ao clicar no botão "Return" o usuário retorna para a aba inicial e os dados inseridos pelo usuário no formulário são apagados do local storage:
</p></li><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/returnButton.gif">
</p><br/>

### Voltando para a aba anterior

<p align="justify">
<li>Caso necessite, o usuário pode retornar para uma aba anterior do fomulário usando a barra de navegação disposta no superior do formulário. Ao retornar para uma aba anterior, as informações preenchidas anteriormente estão salvas e podem ser editadas, porém para avançar para a próxima aba o usuário deve obrigatoriamente usar os botões dispostos na parte inferior, não sendo possível utilizar a aba de navegação para tal. É possível notar também que ao navegar de uma aba para outra o nome do header acima do formulário vai sendo atualizado:
</p></li><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/chengeOfTabs.gif">
</p><br/>

### Editando o layout

* Além de conseguir adicionar quantos componentes quiser e editar os textos o autor também tem a opção de passar aos componentes diversas propriedades de cores que editam não só a cor do background do formulário mas também a cor do textos:

<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/ezgif.com-gif-maker%20(8).gif">
</p><br/>

<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/ezgif.com-gif-maker%20(9).gif">
</p><br/>

### Responsividade

<p align="justify">
<li>Ao atingir 630px o formulário sofre uma alteração de layout para que o conteúdo seja exibido melhor e um espaço reduzido:
</p></li><br/>

<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/ezgif.com-gif-maker%20(10).gif">
</p><br/>

<p align="justify">
<li>A aplicação tem o mesmo funcionamento em dispositivos mobile, as mensagens de erro ainda serão exibidas e as validações também acontecem, abaixo a demonstração é feita em um Iphone 12:
</p></li><br/>

<p align="center">
<img src="https://github.com/WelbertJr/Compass-UOL/blob/master/Docs/ezgif.com-gif-maker%20(11).gif">
</p><br/>

#### Local Storage

<p align="justify">
<li>Foi desenvolvido um local storage para que os dados enviados pelo formulário sejam salvos no navegador, assim que o usuário clica no botão os dados preenchidos são enviados para o local storage:
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadBlue/blob/master/src/assets/localStorage.gif">
</p><br/>

#### Teste Unitário

<p align="justify">
<li>Foi realizado o teste unitário em quatro componentes da aplicação:</li>
</p><br/>

<p align="center">
<img src="./testes.png">
</p><br/>

## Tecnologias utilizadas:
<img alt="Html5" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /> <img alt=Trello src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" /> 
<img alt=VisualStudio src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" /> <img alt="Git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />  <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img alt=Testing Library src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red" /> <br/>
<a href="https://business.adobe.com/br/products/experience-manager/adobe-experience-manager.html?s_kwcid=AL!3085!3!595278689186!e!!g!!adobe%20experience%20manager!10522775459!102977351006&ef_id=CjwKCAjwlqOXBhBqEiwA-hhitMvFEZe4sxzoAFla8_nRtSSZG6OQUoyzIJQqc1WuAWrYBk5C3SwJWRoCH4YQAvD_BwE:G:s"> Adobe Experience Manager </a>
