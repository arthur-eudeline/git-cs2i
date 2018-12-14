### Les commandes Git de bases

Précédemment vous avez été amenés à entrer plusieurs commandes, et vous allez retrouver certaines d’entre elles dans cette partie du tutoriel.

- #### La commande `git init`

  `git init`, comme elle le laisse sous-entendre, permet d'**initialiser Git dans un projet**. En d'autres termes, vous allez ajouter Git à votre projet.

- #### La commande `git clone`

  Cette commande permet quant à elle de *cloner*/télécharger/copier un dépôt Git déjà présent sur un dépôt distant.

- #### Les commandes `git add` , `git commit` et `git checkout`

  Vous allez devoir utiliser ces commandes tout au long de votre projet.

  - `git add` permet d’ajouter à votre commit de nouveaux fichiers.

  - `git commit` permet de valider votre *commit*.

    Pour être soumis, un commit a besoin d'avoir des modifications qui lui sont attachées, ou *stagées*. Pour toutes les ajouter, vous pouvez utiliser `-a` qui ajoutera à votre *commit* toutes les modifications qui vous avez apporté à votre projet.

    Il est possible d'y ajouter une description en utilisant l'argument `-m "[_DESCRIPTION_]`.

    Ainsi, si vous taper `git commit -a -m "Mes nouvelles modifications"`, vous créerez un nouveau *commit* comportant toutes vos modifications et avec le titre "Mes nouvelles modifications".

  - `git checkout` vous offre la possibilité de revenir sur des versions précédentes de votre projet. Pour l'utiliser, vous pouvez taper `git  checkout [_NOM_COMMIT_]`.

- #### La commande `git status`

  Cette commande est elle aussi très importante. Elle vous permet de voir quelles modifications vous avez apporter à votre projet (ajout/création, modification, suppression), et surtout de voir si ces modifications sont *stagées* ou non. C'est-à-dire de savoir si elles font actuellement partie des modifications enregistrée dans le commit en attente ou non.

> A rajouter
>
> rm
>
> mv
