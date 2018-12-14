# Introduction

Aujourd’hui, vous allez apprendre les bases de Git. Autrement dit, vous serez en mesure de maîtriser des notions simples telles que la création d’un projet sous Git, jusqu’à d'autres plus compliquées comme par exemple la gestion des différentes versions. Mais ne nous emballons pas, commençons par le commencement.

## Git, qu'est-ce-que c'est ?

Git est sûrement le **logiciel de versionnage le plus utilisé**, que ce soit pour des projets personnels, en entreprise, etc… ce qui explique sa forte popularité, et le fait qu'on ait déjà sûrement du vous rabâcher les oreilles avec cette fameuse notion de versioning.

Mais alors Git, qu’est-ce que c’est ? Eh bien pour faire court, Git est un outil qui va vous permettre d’**historiser toutes les modifications effectuées sur les fichiers d’un projet**, ce qui va vous permettre, par extension, de pouvoir **revenir en arrière après avoir provoqué un bug bloquant**, ou bien encore pouvoir voir quelles lignes de codes ont été modifiées entre deux sauvegardes et en quoi consistent ces modifications.

> Rien que cette fonctionnalité vous semble déjà bien utile et ô combien prometteuse, qui sait ? peut-être que Git vous permettra enfin d’arrêter de vous arracher les cheveux toute la nuit durant suite à une mauvaise manipulation ?

Outre cette historisation, Git possède d’autres atouts dans sa manche. Pour commencer, il faut savoir que Git est à l’origine un système de versionnage **local**. C’est-à-dire que vous allez avoir une historisation de votre projet directement sur votre machine.
Mais imaginons que votre amour pour le café vous amène (encore) à racheter un PC pour remplacer celui tombé au combat lors de la dernière séance de rush avec votre tasse posée sur le bureau, qu’advient-il de votre projet ? Eh bien malgré le fait que celui-ci soit historisé et sauvegardé, il n'était sauvegardé que sur votre machine, si vous perdez les données, pas de magie, malheureusement "Salut mon pote" comme disait l’autre.

Heureusement, les développeurs étant les personnes les plus formidables au monde, la communauté à pensé à tout ! Par le biais de services gratuit (oui, vous pourrez “investir” dans cette souris RGB hors de prix que vous convoitez depuis si longtemps), vous pouvez sauvegarder votre projet dans le cloud. On pourra notamment citer l’incontournable [GitHub](https://github.com/), mais aussi [GitLab](https://gitlab.com) ou encore [BitBucket](https://bitbucket.org).

Quoi ? Vous ne voulez pas que votre projet se trimballe n’importe où et tombe entre les mains de méchants capitalistes ? Pas de soucis, là encore Git à LA solution. Si vous vivez à l’âge de pierre et êtes totalement réfractaires à l’internet (déjà que faites-vous là ?), il vous suffirait de copier votre projet contenant le dossier caché `[nom_projet]/.git/` situé à sa racine vers une clé usb ou autre, pour pouvoir accéder à tout l’historique des versions et pouvoir interagir avec Git. Enfin dans l’hypothèse où vous seriez assez fous pour ça.
Sinon on ne saurait trop vous proposer d’héberger vous même votre propre serveur de dépôt Git, [comme propose de le faire GitLab](https://about.gitlab.com/pricing/#self-managed). Si vous n’êtes pas très adroit avec le réseau, ne vous en faites pas, de nombreux NAS vous proposent d’installer un serveur Git via une interface graphique.

Qui plus est, Git vous permet de travailler en équipe. Avec ce stockage dans le cloud, vous pouvez synchroniser vos fichiers avant chaque séance de travail, et les sauvegarder en ligne à la fin. Vos collègues pourront donc télécharger vos dernières modifications et voir quelles modifications vous avez effectuées. Des outils intégrés à Git sont mêmes conçus spécialement pour le travail en équipe, comme c'est par exemple le cas de l'intégration continue.

> Bien, suis-je parvenu à attirer votre attention et susciter une certaine envie d’apprendre le versioning ? Parfait, vous allez donc pouvoir commencer à souffrir.

Enfin précisons que Git est un outil initialement conçu en lignes de commandes, et qui n’est donc pas forcément facile à prendre en main pour des initiés ou des personnes allergiques à la ligne de commande. Heureusement pour vous, il existe des interfaces graphiques pour gérer vos projet, mais nous y reviendrons plus tard.
