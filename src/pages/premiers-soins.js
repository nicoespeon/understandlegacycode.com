import { getCssForSettings } from "book-cover-3d"
import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import { FirstAidKitEmailCTA } from "../components/cta"
import { FirstAidKitParity } from "../components/purchase-parity"
import SEO from "../components/seo"

function Page() {
  return (
    <Layout>
      <SEO
        title="Legacy Code: Premiers Soins"
        description=""
        date="2022-09-27"
        slug="/premiers-soins"
        image="/assets/premiers-soins-cover.png"
        keywords={["legacy code", "refactoring", "deadline"]}
      />
      <FirstAidKitParity />
      <TopBar role="presentation" />
      <SectionAlt>
        <Header>
          <HeaderText>
            <h1>
              Secourez votre Legacy <em>rapidement et sereinement.</em> 
              <span role="img" aria-label="Rescue Helmet">
                ⛑
              </span>
            </h1>
            <p>
              Apprenez les techniques pour refactor du code non testé et mal
              documenté, tout en livrant continuellement de la valeur à vos
              utilisateurs.
            </p>
            <p>
              Inscrivez-vous à ma newsletter et recevez{" "}
              <strong>un chapitre gratuit</strong>, extrait de mon guide, sur
              les Refactorings Incrémentaux qui vous permettent de vous arrêter
              et de livrer à tout instant.
            </p>
            <FirstAidKitEmailCTA uid="45bef52aca" />
            <p>
              Ou bien <a href="#buy">achetez le guide dès maintenant</a> si vous
              êtes déjà convaincus !
            </p>
          </HeaderText>
          <HeaderBook>
            <div className="book-container-lcfak">
              <div className="book">
                <img
                  src="/assets/premiers-soins-cover.png"
                  alt="Legacy Code: Premiers Soins"
                />
              </div>
            </div>
          </HeaderBook>
        </Header>
      </SectionAlt>
      <Content>
        <h2 className="quote">
          J’aimerais avoir assez de temps pour refactor ce code !
        </h2>
        <p>
          Chaque semaine c’est la même histoire : vous <em>devez</em> toucher à
          ce code. Pour fixer un bug, ou pour changer un comportement, voire
          peut-être pour ajouter une toute nouvelle fonctionnalité.
        </p>
        <p>Mais ce n’est pas vous qui avez écrit ce code !</p>
        <p>
          C’est un bordel sans nom et mal documenté. Vous aimeriez bien refactor
          le code avant de le changer.{" "}
          <strong>Mais il n’y a aucun test !</strong> Et donc vous n’avez pas
          trop envie de vous risquer à casser quelque chose en le refactorant…
          Vous vous êtes déjà fait avoir une fois, pas deux !
        </p>
        <p>
          Alors oui, vous <em>pourriez</em> commencer par écrire les tests. Mais
          vous n’avez pas le temps ! Vous avez déjà trop de choses à faire dans
          le peu de temps qui vous a été imposé…
        </p>
        <p>
          Et vous y voilà donc : vous êtes bloqué, parce que vous ne savez pas
          par quel bout le prendre. Devriez-vous commencer par nettoyer le code,
          quitte à risquer la deadline ? Et comment allez-vous faire pour écrire
          des tests sur du code qui n’a clairement pas été écrit pour être
          testé ?
        </p>
        <h2 class="quote">
          Quand je commence à refactor un bout, y’a tout qui vient !
        </h2>
        <p>
          Vous avez déjà essayé de nettoyer le code, mais tout est complètement
          emmêlé !
        </p>
        <p>
          Vous avez fait des progrès mais <em>plus rien ne fonctionne</em>. Vous
          ne pouvez donc pas vous arrêter maintenant… sauf qu’il est déjà 21h et
          votre famille vous attend !
          <span role="img" aria-label="Angry face">
            😡
          </span>
        </p>
        <p>Vous connaissez la suite…</p>
        <p>
          Vous n’essayez même plus de comprendre ce chaos. Vous vous contentez
          de faire en sorte que Ça Marche©. C’est sale. Ce n’est pas si mal non
          plus. Vous avez croisé bien pire dans ce tas de code. Vous faites le
          boulot, quitte à aggraver la situation. Il faut livrer.
        </p>
        <p>
          Vous aimeriez bien pouvoir tout recommencer à zéro. Mais ce serait
          difficile à négocier. <strong>Pas de temps, ni d’argent</strong> pour
          ce genre de projet.
        </p>
        <p>
          Vous n’êtes pas très fier de cette base de code que vous maintenez.
          Mais bon, vous vous y habituez. Les clients demandent toujours plus de
          fonctionnalités, et vos collègues n’ont pas l’air de s’intéresser à la
          qualité du code. Vous avez l’impression de faire votre travail. Mais
          vous savez que vous pourriez faire mieux.
        </p>
        <p>
          Cela dit, votre chef ne comprend pas <em>pourquoi</em> ça vous prend
          si longtemps de faire les changements demandés. Vous avez déjà essayé
          de lui expliquer, mais les deadlines sont toujours trop courtes et la
          priorité est toujours donnée à la livraison de nouvelles
          fonctionnalités. Tout le monde se fiche bien que vos yeux saignent en
          lisant ce code !
        </p>
        <p>
          C’est fatigant ! 
          <span role="img" aria-label="Tired face">
            😫
          </span>
        </p>
        <h2>Si vous pouviez au moins arrêter l’hémorragie…</h2>
        <p>
          Vous savez ce qui serait chouette ? Travailler avec du code propre et
          bien testé. Pas de mauvaise surprise, facile à modifier. Le rêve… That
          would be a breeze to work with…
        </p>
        <p>
          Mais votre base de code à vous, c’est un champ de mine. Comment
          pourriez-vous espérer déminer des ANNÉES de Dette Technique ?!
        </p>
        <p>
          Et si je vous disais qu’il existe des manières de refactor le code ET
          de respecter les deadlines ?
        </p>
        <p>
          Imaginez que vous puissiez refactor le code tout en livrant des
          fonctionnalités. Imaginez que vous amélioriez l’état du code au fur et
          à mesure que vous revenez dessus, pour en faire un système facile à
          tester et à maintenir !
          <span role="img" aria-label="Seed">
            🌱
          </span>
        </p>
        <p>
          <strong>Si vous connaissez les bons gestes</strong>, vous pouvez
          apporter les premiers soins à votre code et arrêter le massacre. À
          quel point seriez-vous fier de vous et soulagé de pouvoir redonner des
          couleurs à votre code ?
        </p>
        <p>
          Bien sûr, le système que vous maintenez en ce moment est rempli de
          problèmes. Il a l’air de fonctionner, mais il ne survit vraiment qu’à
          travers des hacks et des patchs plus ou moins tordus. Parfois, vous
          vous demandez si ce ne serait pas plus simple de tout recommencer à
          zéro…
        </p>
        <p>
          Mais qu’en serait-il si vous découvriez des techniques qui vous
          permettraient de le sauver ?
        </p>
        <h2>
          Imaginez pouvoir nettoyer votre Code Legacy à chaque fois que vous y
          touchez.
        </h2>
        <p>
          Peu importe l’état de votre code, vous saurez toujours par où
          commencer. En appliquant constamment les bonnes techniques, vous
          pourrez arrêter le carnage et{" "}
          <strong>éviter une refonte très coûteuse</strong>.
        </p>
        <p>
          Mais surtout, vous continuerez de corriger des bugs et d’ajouter des
          fonctionnalités sans arrêt.
        </p>
        <p>
          <strong>
            Vous n’avez pas à demander la permission de refactor quand vous êtes
            capable de le faire à la volée !
          </strong>
        </p>
        <p>
          Le Refactoring deviendra une deuxième nature pour vous. Vos réflexes
          vous permettront de nettoyer n’importe quel Legacy plus rapidement que
          n’importe lequel de vos collègues ! Vous répondrez constamment aux
          attentes de vos clients et inspirerez vos pairs.
        </p>
        <p>
          En fait, vous pouvez commencer à améliorer cette base de code la
          prochaine fois que vous y touchez. 
          <span role="img" aria-label="Sparkles">
            ✨
          </span>
        </p>
        <p>
          Quand les deadlines sont serrées, il est risqué d’essayer de refactor
          le code… à moins de savoir <u>exactement</u> ce que vous faites.
        </p>
        <h2>
          Grâce à ce guide de Premiers Soins, vous allez apprendre à refactor
          sans risque et <em>rapidement</em>.
        </h2>
        <p>
          J’ai collecté pour vous un ensemble de techniques qui vous aideront à
          reprendre le contrôle de votre code Legacy. Ce sont les trucs et
          astuces qui fonctionnent le mieux pour moi. Je les utilise quand je
          travaille sur des projets en production qui manquent (évidemment) de
          tests et de docs (ça vous semble familier ?).
        </p>
        <p>Ces 14 mouvements vous aideront à :</p>
        <ul style={{ listStyleType: "none", marginTop: 0 }}>
          <CheckedLi>
            optimiser votre travail pour avoir le maximum d’impact
          </CheckedLi>
          <CheckedLi>
            identifier <strong>ce qui rend le code difficile à tester</strong>
          </CheckedLi>
          <CheckedLi>
            <strong>rapidement installer un filet de sécurité</strong> sur le
            code que vous devez toucher
          </CheckedLi>
          <CheckedLi>
            améliorer la qualité du code <strong>progressivement</strong>
          </CheckedLi>
          <CheckedLi>livrer à chaque instant !</CheckedLi>
        </ul>
      </Content>
      <SectionAlt style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Content>
          <h2>
            Ce qu’il y a dans le{" "}
            <em class="highlight">Legacy Code: Premiers Soins</em>?
          </h2>
          <p>
            Il s’agit d’un e-book qui comporte environ 200 pages. Il y a une
            version avec un thème sombre et une avec un thème clair.
          </p>
          <p>
            C’est une collection de <strong>14 techniques</strong> pour
            travailler sur du Code Legacy :
          </p>
          <NumberedList>
            <li>Identifier les Hotspots</li>
            <li>Dessiner les Graphes de Dépendances</li>
            <li>La Méthode Mikado & le Parking</li>
            <li>Micro-committing</li>
            <li>Refactoring Exploratoire</li>
            <li>3 Refactorings Automatisés</li>
            <li>Refactorings Incrémentaux</li>
            <li>Refactoring de Proximité</li>
            <li>Découpler le Core de l’Infrastructure</li>
            <li>Approval Testing</li>
            <li>Subclass & Override</li>
            <li>Move Function to Delegate</li>
            <li>Wrap & Sprout</li>
            <li>Nommage Progressif</li>
          </NumberedList>
          <p>
            Chaque technique est présentée avec des exemples concrets, ainsi que
            des conseils sur quand et comment l’appliquer. De plus, je vous
            explique <em>pourquoi ça fonctionne</em> : la philosophie derrière
            chaque approche, afin que vous puissiez vous adapter à toute
            situation.
          </p>
          <p>
            Enfin, le kit contient quelques feuilles à imprimer et garder près
            de vous. Elles vous aideront à vous rappeler les techniques et à les
            appliquer rapidement.
          </p>
        </Content>
      </SectionAlt>
      <Content>
        <h2>Ce kit a été élaboré pour le terrain.</h2>
        <p>
          Commencez par parcourir le guide rapidement, afin d’avoir une idée
          globale de ce qu’il contient.
        </p>
        <p>
          Puis, gardez-le à portée de main. La prochaine fois que vous touchez à
          du code Legacy, utilisez l’une des techniques qui se prête le mieux à
          la situation.{" "}
          <strong>
            Très rapidement vous verrez les résultats sur votre base de code !
          </strong>
        </p>
        <p>
          Travailler sur votre code devrait redevenir un challenge excitant :
          que pouvez-vous améliorer maintenant ? Qu’allez-vous reporter ?
          Comment pouvez-vous rendre ce code un petit peu meilleur ET livrer de
          la valeur rapidement ? Sentez-vous que le code devient de plus en plus
          facile à maintenir ?
        </p>
        <p>
          Finalement, vous allez pouvoir transformer ce gros tas de spaghetti en
          système bien construit, facile à lire et à tester, tout en livrant
          fonctionnalités et correctifs.{" "}
          <span role="img" aria-label="Cheers">
            😉🍷
          </span>
        </p>
        <p>
          … et ce sont de précieuses compétences qui vous rendront TRÈS
          demandé. 
          <span role="img" aria-label="Gem">
            💎
          </span>
        </p>
      </Content>

      <SectionAlt style={{ position: "relative", overflow: "hidden" }}>
        <Content>
          <QuoteBackground />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
            }}
          >
            <QuoteMedia src="/assets/avatar-tof.jpg" alt="Christophe Thibaut" />
            <Quote>
              <p>
                C’est un kit de survie. Ça n’existe nulle part ailleurs. Les
                gens ne lisent pas de livres, mais un kit de survie oui. J’ai
                travaillé avec des équipes qui pourraient utiliser ce kit dès
                maintenant pour se sortir du pétrin.
              </p>
              <footer>
                <a href="https://twitter.com/ToF_" rel="noopener noreferrer">
                  Christophe Thibaut
                </a>
              </footer>
            </Quote>
          </div>
        </Content>
      </SectionAlt>
      <SectionColored>
        <Content>
          <h2 id="buy">Procurez-vous votre guide</h2>
          <PricingContainer>
            <Pricing>
              <PriceCard>
                <PriceCardTop>
                  <div>
                    <PriceCardTitle>Premiers Soins</PriceCardTitle>
                  </div>
                  <Price>39 €</Price>
                </PriceCardTop>
                <PriceCardContent>
                  <ul>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>
                        <strong>14 techniques</strong> pour secourir votre base
                        de code rapidement et sereinement
                      </PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>Formats PDF, ePub et Kindle</PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>~200 pages de contenu</PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>Thèmes Clair & Sombre</PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>3 cheatsheets à imprimer</PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>
                        1 feuille d’exercices à imprimer
                      </PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>
                        <span role="img" aria-label="England flag">
                          🇬🇧
                        </span>{" "}
                        The English version of the book
                      </PriceListItem>
                    </li>
                  </ul>
                  <div>
                    <PriceLink href="https://understandlegacycode.ck.page/products/legacy-code-premiers-soins">
                      Prenez votre kit de survie
                    </PriceLink>
                  </div>
                </PriceCardContent>
              </PriceCard>
            </Pricing>
          </PricingContainer>
        </Content>
      </SectionColored>
      <SectionAlt style={{ position: "relative", overflow: "hidden" }}>
        <Content>
          <QuoteBackground />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
            }}
          >
            <QuoteMedia
              src="/assets/avatar-chris-hartjes.jpg"
              alt="Chris Hartjes"
            />
            <Quote>
              <p>
                I just bought @nicoespeon’s “Legacy Code: First Aid Kit” — his
                newsletter is great and his tips have helped tame some code in
                my work at UFSC
              </p>
              <footer>
                <a
                  href="https://twitter.com/grmpyprogrammer/status/1377746778150350851"
                  rel="noopener noreferrer"
                >
                  Chris Hartjes
                </a>
              </footer>
            </Quote>
          </div>
        </Content>
      </SectionAlt>
      <Content>
        <h2>À propos de l’auteur</h2>
        <Author>
          <img src="/assets/profile.jpg" alt="Nicolas Carlo" />
          <div
            style={{
              lineHeight: "2rem",
            }}
          >
            <p>
              Salut, je suis{" "}
              <a
                href="https://twitter.com/nicoespeon"
                target="_blank"
                rel="noreferrer noopener"
              >
                Nicolas Carlo
              </a>
               
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </p>
            <p>
              J’ai été développeur web, freelance, consultant et Tech Lead. À
              chaque fois, j’ai eu à travailler avec du code existant que je
              craignais de toucher. Je me suis rendu compte que le Code Legacy
              était partout… mais que nous, développeurs, ne sommes pas préparés
              à le maintenir !
            </p>
            <p>
              Depuis, je collectionne les meilleures techniques pour travailler
              avec des systèmes legacy sur mon blog{" "}
              <a href="https://understandlegacycode.com">
                understandlegacycode.com
              </a>
            </p>
            <p>
              Je crée aussi des{" "}
              <a href="https://github.com/sponsors/nicoespeon">
                outils open-source
              </a>{" "}
              pour aider les développeurs à travailler avec leurs bases de code
              legacy.
            </p>
            <p>— Nicolas</p>
          </div>
        </Author>
      </Content>
      <SectionAlt style={{ position: "relative", overflow: "hidden" }}>
        <Content>
          <QuoteBackground />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
            }}
          >
            <QuoteMedia src="/assets/avatar-gul.jpg" alt="GUL" />
            <Quote>
              <p>
                Every developer should work with this First Aid Kit next to
                him/her.
              </p>
              <footer>
                <a
                  href="https://twitter.com/GUL_THE_TWITTO/status/1377524928132567041"
                  rel="noopener noreferrer"
                >
                  GUL
                </a>
              </footer>
            </Quote>
          </div>
        </Content>
      </SectionAlt>
      <Content style={{ fontSize: "1rem", marginBottom: "6rem" }}>
        <h2>Questions Fréquentes</h2>
        <DictList>
          <div>
            <dt>Ça fait combien de pages ?</dt>
            <dd>
              <p>Le guide contient 219 pages.</p>
            </dd>
          </div>
          <div>
            <dt>Quel est le format du guide ?</dt>
            <dd>
              <p>
                Le guide que vous recevez est un fichier zip qui contient un
                PDF, un EPUB et un MOBI. Vous obtenez également des fichiers
                PDFs à imprimer pour pratiquer certaines techniques.
              </p>
            </dd>
          </div>
          <div>
            <dt>Est-ce que les techniques sont spécifiques à un langage ?</dt>
            <dd>
              <p>
                11 des techniques sont valides, peu importe le langage avec
                lequel vous travaillez. 3 d’entre elles ont un meilleur
                outillage avec les langages au typage statique.
              </p>
              <p>
                3 techniques sont présentées avec une approche orientée-objet,
                en JavaScript. Pour celles-ci, je vous montre également quoi
                faire si vous travaillez plutôt avec une approche fonctionnelle.
              </p>
              <p>
                Les concepts sont valides peu importe le langage. J’utilise
                JavaScript pour illustrer les exemples afin de pouvoir montrer à
                la fois un style OOP et un style FP.
              </p>
            </dd>
          </div>
          <div>
            <dt>Puis-je payer via PayPal ?</dt>
            <dd>
              <p>
                Bien entendu ! Je ne l’ai pas automatisé, mais vous pouvez me
                contacter à nicolas@understandlegacycode.com et je vous enverrai
                un lien pour payer via PayPal.
              </p>
            </dd>
          </div>
          <div>
            <dt>
              Quid si j’achète et que je suis déçu ? Est-ce que je peux
              récupérer mon argent ?
            </dt>
            <dd>
              <p>
                Oui. Je vous offre une garantie de remboursement à 100%, sans
                poser de question.
              </p>
              <p>
                Voyez-vous, mon but est de vous aider à travailler avec du code
                Legacy. Je suis convaincu que mon guide vous aidera à gagner du
                temps, de l’argent, et de la santé mentale.
              </p>
            </dd>
          </div>
          <div>
            <dt>Est-ce que je peux partager ce guide avec mon équipe ?</dt>
            <dd>
              <p>
                Vous pouvez payer plusieurs copies du guide lors de votre achat.
                C’est une manière de me dire merci pour mon travail, et c’est
                fort apprécié.
              </p>
              <p>
                Maintenant, rien ne vous empêche de partager le guide avec vos
                collègues. Peut-être aussi que votre client/employeur pourrait
                couvrir la dépense en frais professionnels.
              </p>
            </dd>
          </div>
          <div>
            <dt>Et si j’ai d’autres questions ?</dt>
            <dd>
              <p>Contactez-moi via nicolas@understandlegacycode.com</p>
            </dd>
          </div>
        </DictList>
      </Content>
    </Layout>
  )
}

const colors = {
  // #ed1b2e
  primary: "hsla(354.6, 85.4%, 51.8%, 1)",
  dark: "hsla(354.6, 70%, 20%, 1)",
  background: "hsla(354.6, 85.4%, 51.8%, 0.3)",
  backgroundLight: "hsla(354.6, 90%, 60%, 0.8)",
  backgroundLightest: "hsla(354.6, 90%, 70%, 0.15)",
  gray: "rgb(78, 97, 108)",
  grayLight: "rgb(107, 114, 128)",
}

const Layout = styled.div`
  color: rgb(12, 30, 41);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans, sans-serif;
  -webkit-font-smoothing: antialiased;

  a {
    text-decoration: none;
    box-shadow: none;
    color: rgb(12, 30, 41);
    font-weight: 600;
    background-image: linear-gradient(
      180deg,
      transparent 70%,
      ${colors.background} 0
    );
    transition: box-shadow 0.2s;
  }

  a:hover,
  a:focus,
  a:active {
    background: 0 0;
    box-shadow: inset 0 -1.3em 0 ${colors.background};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: Montserrat, sans-serif;

    & .highlight {
      font-style: normal;
      color: ${colors.primary};
    }
  }

  h2.quote {
    position: relative;
    font-style: italic;

    &::before {
      position: absolute;
      z-index: -1;
      top: -30px;
      left: -60px;
      content: "";
      width: 72px;
      height: 72px;
      display: block;
      opacity: 0.75;
      background-image: url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' fill='%23ed1b2e' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  }

  ${getCssForSettings("lcfak", {
    rotate: 30,
    rotateHover: 0,
    perspective: 600,
    transitionDuration: 1,
    radius: 2,
    thickness: 50,
    bgColor: "#01060f",
    height: 480,
    width: 300,
    pagesOffset: 3,
  })}
`

const NumberedList = styled.ol`
  @media (min-width: 600px) {
    margin-left: 2rem;
    padding-left: 2rem;
  }

  & > li {
    list-style-type: none;
    margin-left: 2rem;
    position: relative;
    counter-increment: step-counter;
    font-weight: 600;

    &::before {
      content: counter(step-counter);
      margin-right: 1em;
      line-height: 1;
      background-color: ${colors.primary};
      box-shadow: 0.2em 0.2em 0 rgba(128, 128, 128, 0.2);
      color: white;
      padding: 2px 0;
      width: 2.7em;
      height: 1.2em;
      display: block;
      position: absolute;
      box-sizing: border-box;
      margin-left: -62px;
      margin-top: -3px;
      top: 8px;
      text-align: center;
      font-size: 0.9em;
      font-style: normal;
      font-family: sharp-sans, sans-serif;
      font-variant-numeric: lining-nums;
      font-feature-settings: "lnum";
    }
  }

  & > li:nth-of-type(2n + 1)::before {
    transform: rotate(4deg);
  }
`

const TopBar = styled.div`
  height: 0.5rem !important;
  background-color: ${colors.primary};
`

const SectionAlt = styled.div`
  background-color: #f3f7f9;
  padding: 5rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }
`

const SectionColored = styled.div`
  background-color: ${colors.backgroundLight};
  padding: 5rem 3rem;

  h2 {
    margin-top: 1rem;
    font-size: 3rem;
    color: white;
    text-align: center;
  }
`

const Header = styled.div`
  max-width: 1280px;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
    place-content: space-between;
  }
`

const HeaderText = styled.div`
  flex-basis: 65%;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.5rem;

    em {
      color: ${colors.primary};
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 400;
    color: ${colors.gray};
  }

  .formkit-form > div {
    padding-left: 0 !important;
  }

  .formkit-input {
    height: 50px !important;
  }

  @media (min-width: 1100px) {
    margin-bottom: 0;

    h1 {
      font-size: 3rem;
    }
  }
`

const HeaderBook = styled.div`
  flex-basis: 30%;
`

const Content = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 2rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 1.25rem;
  }
`

const PricingContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-top: 4rem;
`

const Pricing = styled.div`
  display: flex;
  justify-content: space-around;
`

const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
`

const PriceCardTop = styled.div`
  background: white;
  padding: 2.5rem;
  padding-bottom: 1.5rem;
`

const PriceCardTitle = styled.h3`
  display: inline-flex;
  margin-top: 0;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 600;
  color: ${colors.dark};
  background-color: ${colors.background};
  font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`

const Price = styled.div`
  margin-top: 1rem;
  line-height: 1;
  font-size: 4rem;
  font-weight: 800;
  align-items: baseline;
  display: flex;
`

const PriceCardContent = styled.div`
  padding: 2.5rem;
  padding-top: 1.5rem;

  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
  flex-direction: column;

  background: rgb(249, 250, 251);

  ul,
  ol {
    list-style: none;
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
  }
`

const PriceListIcon = () => (
  <div style={{ flexShrink: 0 }}>
    <svg
      style={{ width: "1.5rem", color: "rgba(14, 159, 110)" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  </div>
)

const PriceListItem = styled.p`
  color: ${colors.gray};
  margin-left: 0.75rem;
  line-height: 1.5rem;
  font-size: 1rem;
`

const PriceLink = styled.a`
  width: 100%;
  text-align: center;
  padding: 1rem 1.5rem;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  display: block;
  border-width: 1px;
  border-color: transparent;
  background: ${colors.primary};
  color: white !important;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background: ${colors.backgroundLight} !important;
    box-shadow: none !important;
  }
`

const CheckedLi = styled.li`
  position: relative;
  margin-left: 1rem;
  padding-left: 26px;
  color: ${colors.gray};

  &::before {
    content: "";
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMTAiIGZpbGw9IiNDNkY2RDUiLz4KICAgIDxwYXRoIGZpbGw9IiMzOEExNjkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuNzA0NDU1NDUsNC41ODg5MTA4OSBMMy42MDczMjY3Myw2Ljc4OTIwNzkyIEw5LjE2NzMyNjczLDAuMTg4NDE1ODQyIEM5LjU4MzQ3NTI1LC0wLjI1NzUxNDg1MSAxMC4yMzc4MjE4LDAuMjE4MTk2MDQgOS45MTA2NzMyNywwLjcyMzY4MzE2OCBMNC40Mzk5ODAyLDkuMDc4NDM1NjQgQzQuMDIzODMxNjgsOS42MTM3MDI5NyAzLjQ1ODc3MjI4LDkuNjczMjY3MzMgMi45ODMwNDk1LDkuMTM3OTk2MDQgTDAuMjE3NzAyOTcsNS44Mzc3OTgwMiBDLTAuMzE3NTY0MzU2LDUuMDY0NjY5MzEgMS4wNTAzOTYwNCwzLjk2NDcyODcxIDEuNzA0NDM1NjQsNC41ODg5ODYxNCBMMS43MDQ0NTU0NSw0LjU4ODkxMDg5IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiLz4KICA8L2c+Cjwvc3ZnPgo=");
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 8px;
  }
`

const DictList = styled.dl`
  > div {
    margin-top: 1rem;
  }

  dt {
    color: #111223;
    line-height: 1.5rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-top: 2rem;
  }

  dd {
    margin: 0;
    margin-top: 0.5rem;
  }

  p {
    color: ${colors.gray};
    line-height: 1.5rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    > div {
      margin-top: 0;
    }
  }
`

const QuoteBackground = () => (
  <QuoteBackgroundContainer>
    <svg
      style={{
        position: "absolute",
        top: "100%",
        right: "100%",
        transform: "translateX(95%) translateY(-100%)",
        color: colors.backgroundLight,
      }}
      width="192"
      height="192"
      fill="none"
      viewBox="0 0 192 192"
      role="img"
    >
      <defs>
        <pattern
          id="ad119f34-7694-4c31-947f-5c9d249b21f3"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            fill={colors.backgroundLight}
          ></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="404"
        fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
      ></rect>
    </svg>
    <svg
      style={{
        position: "absolute",
        top: "0",
        left: "100%",
        transform: "translateX(-90%) translateY(5%)",
        color: colors.backgroundLight,
      }}
      width="192"
      height="192"
      fill="none"
      viewBox="0 0 192 192"
      role="img"
    >
      <defs>
        <pattern
          id="ad119f34-7694-4c31-947f-5c9d249b21f3"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            fill={colors.backgroundLight}
          ></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="404"
        fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
      ></rect>
    </svg>
  </QuoteBackgroundContainer>
)

const QuoteBackgroundContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`

const QuoteMedia = styled.img`
  border-radius: 9999px;
  height: 5rem;
  width: 5rem;
  margin-left: auto;
  margin-right: auto;
`

const Quote = styled.blockquote`
  border: none;
  margin: 0;
  padding: 0;

  p {
    text-align: center;
    font-style: italic;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    line-height: 1.25em;
  }

  footer {
    text-align: center;
    font-style: normal;
    text-transform: uppercase;
  }

  @media (min-width: 600px) {
    p {
      font-size: 2rem;
      padding: 0 1.5rem;
      line-height: 1.25em;
    }
  }
`

const Author = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  flex-direction: column;

  img {
    max-width: 350px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;

    img {
      margin-right: 2rem;
    }
  }
`

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["approval tests"] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
