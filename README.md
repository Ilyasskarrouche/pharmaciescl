# LOCALISATION DES PHARMACIES
Le projet de localisation des pharmacies vise à créer une interface en ligne permettant aux utilisateurs de trouver facilement les pharmacies en fonction de leurs villes et leurs zones ainsi que les gardes disponibles.

Pour la partie front-end, nous utilisons Ajax, JQuery et ReactJS pour fournir une expérience utilisateur fluide et interactive. Lorsqu'un utilisateur entre une ville et une zone en specifiant le type de garde, nous utilisons Ajax pour envoyer une requête HTTP au serveur et récupérer les données de localisation des pharmacies sans avoir à recharger la page. JQuery est utilisé pour traiter ces données et mettre à jour la page avec les résultats de la recherche. ReactJS nous permet de rendre l'interface utilisateur de manière efficace en ne mettant à jour que les parties de la page qui ont changé .

Pour la partie back-end, nous utilisons Spring Boot pour gérer les requêtes HTTP et accéder à la base de données de pharmacies. Spring Boot fournit également un certain nombre d'outils pour faciliter le développement et la maintenance du projet, tels que l'injection de dépendances et la gestion des erreurs. Nous utilisons également Hibernate pour la gestion de la base de données et l'accès aux données de localisation des pharmacies.

# Fonctionalités
Internaute (Sans authentification) : (React JS / Angular / Vue JS)

• Chercher une pharmacie par ville et zone

• Visualiser les pharmacies dans une Map

• Visualiser la position de l’utilisateur dans la map et mentionner la pharmacie la plus proche

• Filtrer la recherche selon le type de la garde

• Afficher l’itinéraire vers une pharmacie

# Architecture
Front-end :

Pour l'administrateur et le pharmacien :

Utilisation de AJAX et de jQuery pour la gestion des événements et des interactions avec le serveur et la mise à jour de l'interface utilisateur de manière asynchrone.

Pour le client :

Utilisation de ReactJS pour la création de composants réutilisables et la gestion de l'état de l'application.

Back-end :

Utilisation de Spring Boot comme framework de développement pour la couche de backend, qui permet de simplifier la configuration et le déploiement de l'application.

Base de données :

Utilisation de MySQL comme système de gestion de base de données relationnelles pour stocker les données de l'application, comme les informations sur les clients, les médicaments, etc.
Voici comment cela pourrait fonctionner en termes de flux de données :

L'utilisateur de l'administrateur ou du pharmacien envoie une requête en utilisant une interface Web basée sur AJAX et jQuery.
La requête est envoyée au serveur Spring Boot via un contrôleur REST.
Le contrôleur interroge la base de données MySQL et obtient les données requises.
Les données sont envoyées de retour à l'interface utilisateur de l'administrateur ou du pharmacien en utilisant AJAX.
L'utilisateur du client envoie une requête en utilisant une interface Web basée sur ReactJS.
La requête est envoyée au serveur Spring Boot via un contrôleur REST.
Le contrôleur interroge la base de données MySQL et obtient les données requises.
Les données sont envoyées de retour à l'interface utilisateur du client en utilisant ReactJS pour mettre à jour l'état de l'application et afficher les données dans l'interface utilisateur.


![App Screenshot](https://github.com/Ilyasskarrouche/hh/blob/master/a.jpeg?raw=true)


# Installation

Assurez-vous d'avoir une version récente de Node.js et de npm (le gestionnaire de paquets Node.js) installée sur votre ordinateur.

Téléchargez ou clonez le code source du projet depuis son dépôt Git ou téléchargez-le sous forme de fichier archive.

Ouvrez une fenêtre de terminal et accédez au répertoire racine du projet.

Exécutez la commande npm install pour installer toutes les dépendances du projet.

Exécutez la commande npm run build pour générer une version optimisée de votre application React.js, qui sera placée dans un répertoire build à la racine de votre projet.

Utilisez un outil de déploiement de votre choix pour déployer le contenu du répertoire build sur votre serveur de production. Si vous n'avez pas d'outil de déploiement, vous pouvez utiliser un service de hosting web tel que GitHub Pages ou AWS Amplify.

Assurez-vous de configurer votre serveur de production pour servir le contenu statique de votre application à partir du répertoire build. Si vous utilisez un serveur web comme Apache ou Nginx, vous devrez configurer un virtual host pour votre application.

# Auteurs

Karrouche Ilyass

Housni Zakaria 

Zakaria sehoui


# Youtube demo

https://youtube.com/watch?v=GTAa9ZPgRr0&feature=share
