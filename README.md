# :notebook_with_decorative_cover: Project insight - nodeJS

## Introduction

L'objectif de ce projet est de réaliser une application web pour l'école composée d'une partie Client
réalisée avec une technologie au choix ainsi qu'une partie serveur de requêtes web en NodeJS possédant les caractéristiques suivantes :

### Client:
- :heavy_check_mark: Login (étudiant ou admin avec un bon routing)

Si étudiant:
- :spiral_notepad: Listing pour noter les modules
- :warning: une url pour noter (attention à l'url : il y a plusieurs fois le même module avec plusieurs années)

Si admin, accès à l'interface d’administration avec: 
- :heavy_check_mark: CRUD Modules 
- :heavy_check_mark: CRUD Sessions
- :busts_in_silhouette: CRUD Users (ou avec un import JSON, mais bien fournir le fichier d'import)
- :eyes: Visualisation de la note moyenne par module (avec la date d'intervention et le nom de l'intervenant à côté)

### Back-end:
- :busts_in_silhouette: Utilisateurs (avec un champ rôle: soit étudiants ou intervenants ou admin)
- :heavy_check_mark: Sessions (nom de promo, année)
- :heavy_check_mark: Modules (nom du module, id intervenant, id session, date de début, date de fin)
- :100: Notes (id étudiant, id module, note, message)

## Technologies requises
- Docker version 19.03.5

## Technologies utilisées
- Node (Serveur web BackEnd)
- Npm (Gestionnaire de dépendances)
- Angular (Framework FrontEnd)
- MongoDB (Base de données)

Voir le fichier package.json du Back et du Front pour voir les dépendances utilisées
ou sur Github > Insights > Dependency graph

## Premier lancement

Cloner le repository du projet avec l'adresse suivante:

```https://github.com/tomi-douma/project_insight.git```

Se rendre ensuite sur le terminal / invite de commande puis lancer les commandes
suivantes en ayant installé Docker au préalable : 

```
# First launch
docker-compose up --build -d

# Launch
docker-compose up -d
```

## URL
Une fois les commandes Docker exécutées, le projet devrait fonctionner et le client
accessible sur le navigateur à l'adresse du serveur angular
```
# angular server
localhost:4200

# mongodb server 
localhost:27017

# node server
localhost:3000
```

## JWT_KEY

Ecrivez votre key dans .env

