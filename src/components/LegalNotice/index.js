// == Import : npm
import './legal-notice.scss';

// == Composant
function LegalNotice() {
  return (
    <div className="legal-notice">
      <h1>Conditions d'utilisation</h1>
      <h2>SOMMAIRE</h2>
      <ul className="parent-ul">
        <li>Article 1 : Objet</li>
        <li>Article 2 : Mentions légales</li>
        <li>Article 3 : Obligations</li>
        <ul className="children-ul">
          <li>3.1 Obligations de l'utilisateur</li>
          <li>3.2 Règles principales</li>
          <li>3.3 Non respect des conditions générales d'utilisation</li>
        </ul>
        <li>Article 4 : Confidentialité</li>
        <ul className="children-ul">
          <li>4.1 Protection des données personnelles</li>
          <li>4.2 Droit d'accès aux informations</li>
          <li>4.3 Cookies</li>
        </ul>
        <li>Article 5 : Propriété intellectuelle</li>
        <ul className="children-ul">
          <li>5.1 Licences de nos contenus</li>
          <li>5.2 Violation du droit d'auteur</li>
          <li>5.3 Conditions découlant de l'interactivité du site</li>
        </ul>
        <li>Article 6 : Responsabilités</li>
        <ul className="children-ul">
          <li>6.1 Dommages matériels et pertes de données</li>
          <li>6.2 Responsabilité lors de la pratique</li>
          <li>6.3 Recherche de partenaire d'escalade</li>
        </ul>
        <li>Article 7 : Limitation de garanties</li>
        <ul className="children-ul">
          <li>7.1 Garanties</li>
          <li>7.2 Fermeture ou suspension du site</li>
        </ul>
        <li>Article 8 : Liens hypertextes</li>
        <ul className="children-ul">
          <li>8.1 Liens vers le site <span>O'Hisse</span>.com</li>
          <li>8.2 Liens hypertextes en direction de sites tiers</li>
        </ul>
        <li>Article 9 : Droit applicable</li>
      </ul>

      <h2>Article 1 : Objet</h2>
      <p>Les conditions générales d'utilisation ont pour objet de définir les modalités de mise à disposition des services d'<span>O'Hisse</span>.org par l'utilisateur. Tout accès et utilisation d'<span>O'Hisse</span>.org est soumis au respect de l'ensemble des règles et obligations décrites dans les conditions générales d'utilisation, sans aucune restriction.

        Toute personne (physique ou morale) souhaitant accéder au service d'<span>O'Hisse</span>.org doit donc avoir préalablement lu l'intégralité des conditions générales d'utilisation, se trouvant au pied de chaque page du site internet. Il sera donc considéré que par sa seule navigation sur <span>O'Hisse</span>.org, l'utilisateur a intégralement lu et accepté les conditions générales d'utilisation.

        <span>O'Hisse</span>.org se réserve le droit de modifier ou de mettre à jour à tout moment ses conditions générales d'utilisation.
      </p>

      <h2>Article 2 : Mentions légales</h2>
      <p>Selon l'article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs d'<span>O'Hisse</span>.org l'identité des propriétaires du site internet, et de l'organisme hébergeur du site.

        <span>O'Hisse</span>.org est édité par Lucien Chastan. Les directeurs de rédaction d'<span>O'Hisse</span>.org est Lucien Chastan.

        <span>O'Hisse</span>.org est hébergé par : PHPNET FRANCE, ayant son siège social au 97-97 bis rue du général Mangin à Grenoble (38100) FRANCE, numéro de SIRET 451878128 00037, avec le N° TVA FR32451878128. La société PHPNET FRANCE est joignable au (+33) 04 82 53 02 10, et à l'adresse support@phpnet.org.

        Le traitement informatique des données sur le site <span>O'Hisse</span>.org se fait dans le respect de la vie privée et de la légalité : conformément aux dispositions de la loi n° 78-17 du 6 Janvier 1978 relative a l'informatique, aux fichiers et aux libertés, ce site a fait l'objet d'une déclaration auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : déclaration n°1890811v0.
      </p>

      <h2>Article 3 : Obligations</h2>
      <h3>3.1 Obligations de l'utilisateur</h3>
      <p>En acceptant les conditions générales d'utilisation d'<span>O'Hisse</span>.org, l'utilisateur s'interdit de se livrer à des actes de quelque nature que ce soit, tels que l'édition, la mise en ligne, l'émission ou la diffusion de contenus, d'informations et de données qui seraient contraires à la loi, ou qui pourraient porter atteinte à l'ordre public, aux droits d'<span>O'Hisse</span>.org, ou aux droits de tiers.</p>

      <h3>3.2 Règles principales</h3>
      <p>Par conséquent, l'utilisateur s'engage à respecter les règles suivantes ( liste non-exhaustive ) :

        se conformer aux lois en vigueur, respecter les conditions générales d'utilisation, et les droits des tiers
        ne pas créer, diffuser, transmettre, communiquer ou stocker des informations et données à caractère diffamatoire, injurieux, obscène, pornographique, pédopornographique, violent ou incitant à la violence, raciste, xénophobe, homophobe, discriminatoire, et plus généralement tout contenu contraire à l'ordre public
        respecter les droits de propriété intellectuelle liés aux contenus diffusés sur <span>O'Hisse</span>.org
        ne pas détourner une des fonctionnalités d'<span>O'Hisse</span>.org de son usage normal
        ne pas diffuser de contenus, de données ou d'informations non conformes à la réalité
        ne pas diffuser de contenus, de données ou d'informations susceptibles de diminuer, désorganiser ou empêcher l'utilisation normale d'<span>O'Hisse</span>.org.
      </p>
      <h3>3.3 Non respect des conditions générales d'utilisation</h3>
      <p>Dans le cas ou les conditions générales du site n'auraient pas été respectées, <span>O'Hisse</span>.org pourra retirer tout ou partie des contenus mis en ligne par les utilisateurs malveillants. Tout utilisateur a le droit de signaler un contenu qu'il estime contraire aux conditions générales d'utilisation en contactant les administrateurs d'Obyk.org.</p>

      <h2>Article 4 : Confidentialité</h2>
      <h3>4.1 Protection des données personnelles</h3>
      <p>Selon la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-80 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive 95/46/CE du Parlement européen et du Conseil du 24 octobre 1995, les données personnelles des utilisateurs recueillies lors de leur inscription sont protégées. Elles font l'objet d'un traitement informatique : <span>O'Hisse</span>.org les utilise uniquement pour que l'utilisateur puisse avoir recours aux différents services et fonctionnalités du site. Ces données peuvent également être utilisée par <span>O'Hisse</span>.org à des fins statistiques, pour connaître les données de fréquentation du site, ou pour mieux cibler les nouvelles fonctionnalités développées. En aucun cas ces données ne seront transmises à des tiers (particuliers ou partenaires commerciaux) : elles restent en la possession d'<span>O'Hisse</span>.org, qui en garantit la confidentialité.</p>

      <h3>4.2 Droit d'accès aux informations</h3>
      <p>Conformément aux articles 39 et 40 de la Loi n° 78-17 du 6 janvier 1978, l'utilisateur peut choisir à tout moment d'accéder à ses informations personnelles détenues par <span>O'Hisse</span>.org, mais aussi demander leur modification ou leur suppression.</p>

      <h3>4.3 Cookies</h3>
      <p><span>O'Hisse</span>.org utilise des cookies, qui sont des marqueurs permettant d'améliorer l'expérience de navigation sur le site (sauvegarde de certains paramètres en mémoire sur le navigateur, pour plus de rapidité lors de l'utilisation). Les cookies sont sans dommage pour l'ordinateur et les données personnelles de l'utilisateur.

        L'utilisateur a le choix d'accepter ou de refuser l'utilisation des cookies sur <span>O'Hisse</span>.org par le biais de son navigateur internet.

        Les cookies sont anonymes, et ne sont pas utilisés à des fins de collecte d'information à caractère personnel. Aucune de ces données anonymes ne pourra être transmise à des partenaires commerciaux, ou organismes tiers : elle resteront en possession d'<span>O'Hisse</span>.org.
      </p>

      <h2>Article 5 : Propriété intellectuelle</h2>
      <h3>5.1 Licences de nos contenus</h3>
      <p>On distingue deux types de contenus sur <span>O'Hisse</span>.org : le contenu personnel, et le contenu communautaire.

        Le contenu personnel comprend tout ce que les utilisateurs publient sur leur profil : les voies qu'ils cochent dans leur carnet de croix, leurs informations personnelles, leurs photos personnelles, leurs messages personnels, leurs contributions sur le forum. Ce contenu est soumis au droit d'auteur, et l'auteur est l'utilisateur concerné.

        Le contenu communautaire comprend les contributions des utilisateurs à <span>O'Hisse</span>.org : les sites, secteurs et lignes qu'ils ajoutent sur la base de données du site (et les informations détaillées qui y sont liées), les commentaires (publics ou anonymes), les mots ajoutés au lexique, les liens qu'ils postent, les topos qu'ils référencent, les photos qu'ils ajoutent pour la communauté.

        Le propriétaire du contenu communautaire est ©<span>O'Hisse</span>. Ce contenu est sous double licence : CC BY-NC-SA (pour le contenu) , et Open Database License (pour la base de données).

        Vous êtes libres de remixer, arranger, et adapter notre œuvre à des fins non commerciales, tant que vous créditez notre nom et que les œuvres dérivées que vous diffusez sont soumises aux mêmes conditions. Veuillez créditez ©<span>O'Hisse</span>, indiquer le lien du document source sur <span>O'Hisse</span>.org , et insérer le nom des deux licences (CC BY-NC-SA et Open Database License), ainsi qu'un lien hypertexte vers chacune de ces deux licences.
      </p>

      <h3>5.2 Violation du droit d'auteur</h3>
      <p>Nous rappelons aux contributeurs d’<span>O'Hisse</span>.org qu’ils ne doivent jamais ajouter de données provenant de sources protégées par le droit d’auteur (copyright) ou des droits voisins sans autorisation explicite de la part des détenteurs de ces droits.

        Si vous pensez que des données ont été ajoutées à la base de données d'<span>O'Hisse</span>.org en violation des droits d’auteur, veuillez nous contacter à ekip@<span>O'Hisse</span>.org.
      </p>

      <h3>5.3 Conditions découlant de l'interactivité du site</h3>
      <p>En ajoutant un contenu (texte, image, ou autre) dans l'une des rubriques interactives du site, l'utilisateur cède expressément et gracieusement à <span>O'Hisse</span>.org le droit de diffusion de ce contenu (reproduction, représentation, adaptation) par tout moyen (tout support et tout format connu et inconnu à ce jour) pour le monde entier et pour la durée de propriété intellectuelle actuelle ou à venir. Les droits d'auteur restent réservés.

        <span>O'Hisse</span>.org se réserve le droit de publier ou non les contributions qu'il reçoit sur le site, de les modifier, les adapter, les traduire en toute langue, les conserver ou les supprimer en ligne à tout moment.

        L'utilisateur est seul et unique responsable du contenu qu'il ajoute sur <span>O'Hisse</span>.org. À ce titre, il garantit <span>O'Hisse</span>.org contre tout recours et/ou action judiciaire qui pourrait découler de sa diffusion. Il répond notamment pénalement et financièrement seul des atteintes éventuelles aux droits de la personne, droit à la vie privée, droit à la dignité humaine et droits d'auteur que causerait sa contribution.

        Les contributions des utilisateurs n'engagent que leur auteur et ne représentent en aucun cas une prise de position officielle d'<span>O'Hisse</span>.org.
      </p>

      <h2>Article 6 : Responsabilités</h2>
      <p>L'utilisation d'<span>O'Hisse</span>.org se fait sous l'entière responsabilité des internautes.</p>

      <h3>6.1 Dommages matériels et pertes de données</h3>
      <p>Sous réserve des dispositions légales applicables, <span>O'Hisse</span>.org ne saurait être tenu responsable de tout dommage direct ou indirect (comme : perte de profits, de clientèle, de données, de biens incorporels ; liste non exhaustive) résultant de l'utilisation ou de l'impossibilité d'utilisation du site, et plus généralement de tout évènement ayant un lien avec le site et/ou tout site tiers. Tout matériel ou contenu téléchargé sur le site <span>O'Hisse</span>.org l'est aux risques et périls de l'utilisateur. <span>O'Hisse</span>.org ne saurait être tenu responsable d'éventuels dommages ou pertes de données subis par l'ordinateur d'un utilisateur.</p>

      <h3>6.2 Responsabilité lors de la pratique</h3>
      <p>La pratique des activités sportives de plein air (telles que l'escalade ou d'autres disciplines liées à la montagne) doit se faire avec une connaissance avancée du terrain et des techniques de sécurité de l'activité concernée, et présente l'acceptation d'un degré de risque qui doit être adapté aux capacités de chacun. <span>O'Hisse</span>.org recommande à ses utilisateurs la plus grande prudence dans l'interprétation des données et informations renseignées par la communauté. <span>O'Hisse</span>.org ne garantit en aucun cas l'exactitude et l'exhaustivité des indications fournies directement sur ce site (comme l'équipement des lignes, leur hauteur, les conseils présents sur le forum ou dans des commentaires, etc. liste non exhaustive) . Tous ces renseignements son non contractuels et ne peuvent donc pas engager la responsabilité d'<span>O'Hisse</span>.org ou des auteurs des contenus en question. De plus, ces renseignements ne peuvent se substituer à l'avis d'un professionnel qualifié pour l'activité sportive concernée. <span>O'Hisse</span>.org décline toute responsabilité liée aux incidents de toute nature pouvant intervenir suite à l'utilisation ou l'interprétation d'informations diffusées sur son site internet.</p>

      <h3>6.3 Recherche de partenaire d'escalade</h3>
      <p><span>O'Hisse</span>.org ne pourra pas être tenu responsable du comportement ou des actes des personnes qui se rencontreraient ou communiqueraient suite à l'utilisation du service de recherche de partenaires.

        Le service de recherche de partenaire est interdit aux mineurs.

        Pour que le service de recherche de partenaire fonctionne, l'utilisateur doit obligatoirement renseigner sa date de naissance. <span>O'Hisse</span>.org ne pourra pas être tenu responsable dans le cas où l'utilisateur indique une fausse date de naissance dans le but d'utiliser le service malgré les restrictions.
      </p>

      <h2>Article 7 : Limitation de garanties</h2>
      <h3>7.1 Garanties</h3>
      <p>Le site est fourni en l'état. Il est accessible en fonction de sa disponibilité, sans aucune garantie expresse ou implicite de la part d'<span>O'Hisse</span>.org. En particulier, <span>O'Hisse</span>.org ne garantit pas que :

        le site, les contenus ou les produits proposés répondront parfaitement aux attentes des utilisateurs
        le site fonctionnera de façon ininterrompue et sans erreurs
        les erreurs seront corrigées
      </p>
      <h3>7.2 Fermeture ou suspension du site</h3>
      <p><span>O'Hisse</span>.org se réserve la possibilité, à tout moment, d'interrompre temporairement ou définitivement tout ou partie de ce site internet, sans préavis ni indemnités. <span>O'Hisse</span>.org ne pourra en aucun cas être tenu responsable des conséquences d'une telle décision.</p>

      <h2>Article 8 : Liens hypertextes</h2>
      <h3>8.1 Liens vers le site <span>O'Hisse</span>.org</h3>
      <p>Les liens pointant sur n'importe quelle page du site (page d'accueil ou autres) sont autorisés et fortement encouragés. Cependant, <span>O'Hisse</span>.org n'exerce aucun contrôle sur les sites tiers et ne peut donc assumer aucune responsabilité liée aux contenus, produits, services, informations, matériaux, logiciels des sites externes qui comportent un lien hypertexte vers <span>O'Hisse</span>.org.</p>

      <h3>8.2 Liens hypertextes en direction de sites tiers</h3>
      <p><span>O'Hisse</span>.org peut contenir des liens hypertexte vers des sites tiers, mais n'exerce aucun contrôle sur ces sites tiers, et donc ne peut assumer aucune responsabilité liée à la disponibilité de ces sites, ou liée aux contenus, publicités, produits, et services disponibles sur ou à partir de ces sites. <span>O'Hisse</span>.org ne pourra pas être tenu responsable des dommages directs ou indirects liés à l'accès d'un de ses utilisateurs à un site tiers, ou lié à l'utilisation des services proposés sur ces sites.</p>

      <h2>Article 9 : Droit applicable</h2>
      <p>Le site <span>O'Hisse</span>.org est soumis au droit français</p>
    </div>
  );
}

// == Export
export default LegalNotice;
