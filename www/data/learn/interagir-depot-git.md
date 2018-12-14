# Interagir avec un dépôt Git

## Qu'est-ce qu'un dépôt Git ?

Eh bien, comme son nom l'indique, c'est là que vous allez déposer votre projet sous Git. C'est ce dépôt qui va pouvoir accueillir votre projet et permettre de le partager avec votre équipe notamment.

## Travailler avec un dépôt Git distant (*remote*)

Là où les choses se compliquent (vraiment de peu), c'est lorsqu'il faut interagir avec votre dépôt. Pour ce faire, vous pouvez globalement vous retrouver dans deux cas majeurs :

- ### Vous commencez un nouveau projet, soit vous avez déjà créé votre projet mais n'avez pas encore ajouté de dépôt Git distant

  Auquel cas, après avoir passé votre projet sous Git via la commande `git init`,  vous allez devoir ajouter à votre projet à dépôt distant (*remote*). Dans le cas où nous utiliserions GitLab pour ce projet, il faudrait suivre les étapes suivantes :

  - Se rendre sur [GitLab](https://gitlab.com) et se connecter/créer un compte.

  - Créer un nouveau projet

  - Copier l'URL du dépôt Git se trouvant sur la page du projet. Elle devrait ressembler à ceci : https://gitlab.com/[_VotreUsername_]/[_NomDeVotreDepot_].git

  - Via le terminal, nous exécuterions les commandes suivantes dans le dossier de notre projet :

    ```
    git init
    git remote add origin https://gitlab.com/[_VotreUsername_]/[_NomDeVotreDepot_].git
    git add .
    git commit -m "Mon premier commit"
    git push -u origin master
    ```

- ### Le projet sur lequel vous voulez travaillez existe déjà sur un dépôt Git distant et vous souhaitez le récupérer sur votre machine

  Rien de plus simple, une commande existe déjà : `git clone`. En utilisant cette commande, vous allez être à même de copier tout le contenu d'un dépôt Git distant directement dans un dossier. Petit bonus à la prime, vous récupérerez automatiquement la configuration du dépôt en passant par `git clone`, ce que vous n'auriez pas en téléchargeant simplement l'archive du projet au format .zip sur le site.

  Pour utiliser `git clone`, rien de plus simple : précisez simplement l'URL du dépôt que vous souhaitez récupérer :

  ```
  git clone https://gitlab.com/[_VotreUsername_]/[_NomDeVotreDepot_].git
  ```
