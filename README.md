Quais melhorias foram realizadas?

O site passou por diversas melhorias na interface, usabilidade, organização da informação e acessibilidade.
No site anterior, as notícias estavam misturadas, o que dificultava a busca por conteúdos específicos. Por exemplo, ao procurar notícias de economia, era necessário navegar entre diversas notícias. Para resolver isso, implementei a separação das notícias por categorias, organizadas no menu, facilitando a navegação e a busca por temas específicos.

Na página inicial, passei a exibir as notícias mais recentes, referentes às últimas 24 horas, garantindo acesso rápido às informações mais atuais. Além disso, cada notícia passou a conter uma etiqueta de categoria (como tecnologia, esportes e economia), facilitando a identificação do tema mesmo quando as notícias aparecem juntas na página inicial. Também adicionei uma seção de notícia em destaque, com a principal ou mais relevante notícia do momento, facilitando o acesso ao conteúdo mais importante.

Outro ponto importante foi a melhoria do fluxo de navegação. O menu anterior não era funcional, o que dificultava o acesso às páginas. Por isso, eu tornei o menu funcional. Além disso, na página inicial e nas páginas de categorias, passei a exibir um resumo das notícias, permitindo que o usuário acesse o conteúdo completo por meio do botão “Leia mais”, caso tenha interesse.

Também fiz melhorias na clareza das informações. No site anterior, as imagens não tinham relação clara com os textos e as notícias eram muito resumidas, sem informações essenciais como contexto, autor e detalhes do acontecimento. Com isso, reformulei a estrutura das notícias para incluir informações mais completas, como o que aconteceu, quando, onde, etc.

Na parte de acessibilidade, corrigi a semântica do HTML, utilizando as tags corretas para melhor interpretação por leitores de tela, além de adicionar descrições (alt) nas imagens, permitindo que usuários com deficiência visual compreendam o conteúdo visual.

No aspecto visual, os links foram estilizados como botões interativos, com mudanças de cor ao passar o mouse e ao clicar, deixando mais claro que são elementos clicáveis. Também foi feita a melhoria da tipografia, utilizando Arial para textos e Georgia (serif) para títulos, já que a fonte anterior não transmitia profissionalismo nem facilitava a leitura, o que é essencial para um site de notícias.

As notícias também foram organizadas em cards (blocos), melhorando a separação visual dos conteúdos. Além disso, foi adotada uma paleta de cores baseada em tons de vermelho/vinho, transmitindo seriedade e urgência, características comuns em sites de notícias.

Por fim, o site foi adaptado para diferentes dispositivos por meio de Media Queries, garantindo responsividade em celulares, tablets e desktops. No site anterior, as imagens possuíam tamanhos fixos, o que prejudicava a visualização em telas menores e para ler o conteúdo era preciso rolar a tela para o lado. Com essa adaptação, a visualização em dispositivos melhores é tão eficiente quanto em computadores.

-Quais elementos semânticos foram utilizados?-----------------------------------------------------------------------------------

Os elementos semânticos utilizados no site incluem principalmente header, main, section, article e footer.
O elemento header foi utilizado como cabeçalho do site. Dentro dele, foram inseridos a logo, o nome do site de notícias (NewsToday), um título principal em h1 e também a nav, que contém o menu com links para as outras páginas.

O elemento main representa o conteúdo principal da página. Dentro dele, há uma section que agrupa a notícia em destaque. Nessa section, utilizei um article, pois cada notícia é um conteúdo independente, que pode ser entendido por si só sem depender de outras partes do site. Dentro desse article, foram utilizados elementos como h3 para o título da notícia, p para o parágrafo, img para a imagem e links para ações como “Leia mais” e para as categorias das notícias.

Também foi utilizada outra section na página inicial para agrupar as notícias recentes(Notícias das últimas 24h). Essas notícias aparecem abaixo da notícia em destaque. Dentro dessa section, existem três articles, pois cada notícia também é independente. Em cada article, há uma imagem (img), um título (h3),  parágrafos (p) e o link de “Leia mais”. Coloquei duas sections, pois a notícia em destaque fica centralizada, enquanto as noticias recentes são menores e dividem o espaço da tela (três notícias por linha), essa separação melhora a organização da página.

Todas as páginas seguem uma estrutura semelhante, utilizando as mesmas tags semânticas. Nas páginas de esporte, tecnologia e economia eu usei uma única section para agrupar todas as notícias. A principal diferença é que algumas páginas apresentam apenas uma notícia, como nas páginas acessadas ao clicar em “Leia mais”. Nesses casos, há uma única section e um único article.
Também utilizei o elemento footer, que representa o rodapé da página. Nele, inseri informações de contato do jornal utilizando a tag p para exibir os textos. 

De forma geral, os títulos seguem uma hierarquia com h1, h2 e h3, garantindo uma organização clara do conteúdo.
Esses elementos semânticos colaboram para a acessibilidade do site, pois melhora a interpretação do conteúdo por leitores de tela, contribuindo diretamente para uma melhor experiência do usuário.

-Quais Media Queries foram implementadas? --------------------------------------------------------------------------------------

Foram implementadas duas Media Queries para adaptar o site a diferentes tamanhos de tela e garantir uma boa experiência de uso em computadores, tablets e celulares.

A primeira Media Query foi aplicada para telas com largura entre 768px e 1023px, correspondendo aos tablets. Nessa versão, o cabeçalho foi reorganizado, pois no layout para computadores todos os elementos ficavam em uma única linha, o que causava problemas de visualização em telas menores. Para resolver isso, o header passou a utilizar uma disposição em coluna, com a logo na parte superior, seguida pelo nome do site (News Today) e, abaixo, o menu de navegação em uma única linha.

Além disso, foram realizados ajustes no tamanho das imagens para que permanecessem proporcionais à tela, no tamanho dos textos para melhorar a legibilidade e nos cards das notícias para que ocupassem uma área maior da página. Os botões também foram aumentados, evitando que ficassem pequenos.

A segunda Media Query foi aplicada para telas com largura máxima de 767px, correspondendo aos celulares. Nessa versão, foram feitos ajustes adicionais nas imagens, textos e títulos para garantir uma boa visualização em telas menores.

No menu de navegação foi utilizada a propriedade flex-wrap: wrap, permitindo que os itens fossem distribuídos em mais de uma linha conforme o espaço disponível diminuía. Essa solução foi escolhida para evitar que os textos do menu ficassem muito pequenos e também para não criar um cabeçalho alto, como ocorreria caso todos os itens fossem organizados em uma única coluna.

De forma geral, as adaptações realizadas para tablets e celulares foram semelhantes, concentrando-se principalmente no ajuste de tamanhos e na melhoria da legibilidade e da usabilidade em diferentes dispositivos.

-Quais decisões de UX e UI foram adotadas?---------------------------------------------------------------------------------------

User Experience (UX):
As decisões de UX foram tomadas com o objetivo de tornar a navegação mais organizada, intuitiva e eficiente. Foi decidido organizar as notícias por categorias e disponibilizá-las no menu, facilitando a busca por temas específicos e reduzindo a dificuldade de encontrar conteúdos. As etiquetas de categoria foram adicionadas para permitir a identificação rápida do tema das notícias, melhorando a navegação e a descoberta de conteúdos da mesma categoria, caso o usuário tenha interese.

Outra decisão de UX foi exibir apenas resumos nas páginas iniciais, permitindo o acesso ao conteúdo completo pelo botão “Leia mais”. Essa estratégia reduz o excesso de informações na tela (estando relacionado a UI), torna a navegação mais objetiva e facilita a realização da principal tarefa do usuário: encontrar e ler notícias de forma rápida e simples.

Além disso, foram aplicadas decisões de acessibilidade, como o uso de tags semânticas e textos alternativos (alt) em imagens, garantindo que diferentes usuários consigam compreender e acessar o conteúdo com mais facilidade.

User Interface (UI):
As decisões de UI foram voltadas para melhorar a apresentação visual e a clareza dos elementos na tela.
A hierarquia visual da index foi construída utilizando um card maior para a notícia em destaque e cards menores para as notícias recentes das últimas 24 horas, direcionando a atenção do usuário para a informação principal e mantendo a página organizada. Essa organização permite que o usuário identifique rapidamente a informação mais importante, melhorando o fluxo de navegação e tornando a experiencia mais clara e objetiva, estando diretamente relacionada a UX.

Os links foram transformados em botões interativos com efeitos de hover e clique, fornecendo feedback visual e deixando mais evidente que são elementos clicáveis, melhorando a interação com a interface.

Foi escolhida uma tipografia mais adequada à leitura, utilizando Arial para textos e Georgia para títulos, melhorando a legibilidade e facilitando a identificação das informações.

As notícias foram organizadas em cards para separar melhor os conteúdos e facilitar a leitura e a compreensão. Além disso, foi definida uma paleta de cores em tons de vermelho/vinho para transmitir seriedade e identidade visual de um site de notícias, mantendo essas cores em todo o site com variações da mesma paleta.

Os botões seguem um padrão de cores, com exceção do botão de contato, que utiliza a cor verde por ser associado ao WhatsApp. As etiquetas de categorias também possuem cores diferentes, pois decidi relacionar cores e categorias, como azul para tecnologia, vermelho para esportes e amarelo para economia, tornando a identificação das notícias mais rápida e intuitiva.

Também implementei responsividade com Media Queries, permitindo que o site se adapte a diferentes tamanhos de tela, como celulares e tablets. Com essa adaptação, o conteúdo pode ser acessado de forma eficiente em qualquer dispositivo, mantendo a interface do usuário organizada e tendo impacto na experiência do usuário.