* IOTSensorTagRPI
# Sur votre raspberry installez mysql-server
<<  sudo apt-get install mysql-server >>
# accedez à mysql :
<< sudo mysql -u root >>
# créez une base de donnée et accedez à cette derniere (dans mon cas c'est bleValues ;; vous pouvez la personnaliser)
<< create database bleValues >>
<< use bleValues >>
# créez une table (dans mon cas c'est value ;; vous pouvez la personnaliser)
<< create table (
   -> id int not null auto_increment primary key,
   -> temperature varchar(20) not null,
   -> pression varchar(20) not null,
   -> date_v date not null,
   -> time_v time not null); >>
# ouvrez le fichier sensortag.py se trouvant dans le dossier WWW/html
# et mettez l'adresse Mac du sensortag dans la variable bluetooth
# lancez le sensortag.py et connectez votre Sensortag
<< pyhton sensortag.py >>
# et lancez le server.py depuis le dossier www
<< python ../server.py >>
# dans votre navigateur (raspberry) lancer le lien 
<< localhost:8000 >>
# si vous voulez afficher le resultat sur un pc ou telephone qui est sur le meme reseau que la raspberry :
# il faudra modifier le fichier script.js dans le dossier www/js de telle sorte de mettre l'adresse ip de la raspberry au lieu de localhost
# puis dans le navigateur de votre pc ou smartphone vous lancez le lien
<< adresse_ip_raspberry:8000 >>
# dans la page de l'authentification mettez :
<< user ---> omar >>
<< mot de passe  ---> upmc >>
