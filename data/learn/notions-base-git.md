# Les notions de base de Git

Git possède une logique qui lui est propre et, il faut bien l'avouer, peut sembler étrange au premier abord. Il faut déjà partir du principe que **Git ne supprime rien**, il ne fait qu'**ajouter**. Par exemple, si vous supprimer un fichier, Git va ajouter ce changement et l'indexer. Si vous supprimez un commit, Git va effectuer un commit qui marque le commit précédent comme supprimé et ainsi de suite.

Pour comprendre cette logique, il est important de comprendre, du moins en surface, les notions suivantes :

## Les commits

Lorsque vous travaillez avec Git, tous les changements que vous apportez à vos fichiers sont enregistrés, pour peu que vous ayez marqué les fichiers concercnés avec `git add`. Cependant, pour sauvegarder ces changements à un instant T, il faut passer par la commande `git commit`.

Vous pouvez considérer que d'une certaine façon, le commit est un peu à Git ce qu'une sauvegarde est à un jeu vidéo : lorsque vous effectuez un commit,  vous dites à Git "sauvegarde tous les changements que j'ai apporté à mes fichiers".

Pour lancer cette commande, rien de bien compliqué :

```
git commit --message="Mon nom de commit"
```

Et voilà, vous avez sauvegardé l'état de votre projet !

## Paramètrer des dépôts distants

Le principal intérêt de Git, même s'il est parfaitement capable de travailler complètement hors-ligne, est de pouvoir synchroniser son travail sur un serveur afin de pouvoir travailler en équipe, mais aussi de pouvoir tout simplement stocker une copie physique de son projet en lieu sûr. Pour créer un dépôt distant, vous pouvez vous rendre sur GitHub par exemple et initialiser un nouveau dépôt. Pour l'ajouter à votre projet sur votre machine, il vous suffira ensuite de faire :

```
git remote add origin [URL_DU_DEPOT]
```



## Le Push

Nous parlions tout à l'heure de sauvegarder vos modifications sur un repertoire distant, eh bien ça y est : nous y sommes ! Le push, à traduire en anglais par "pousser", désigne l'action d'envoyer vos modifications sur un dépôt distant. En d'autres termes, vous demandez à Git de sauvegarder tous les commits que vous avez fait sur le server distant si ces commits n'y sont pas déjà.

```
git push
```

## Le Pull

Cette fois-ci, le pull a l'effet inverse : il va "tirer" les modifications apportées au projet et sauvegardées sur le dépôt distant pour les synchroniser avec votre version locale. En d'autres termes, vous synchronisez votre projet avec la version présente sur le server :

```
git pull
```
