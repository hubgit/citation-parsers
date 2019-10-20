import React, { FormEvent, useCallback, useState } from 'react'
import './App.css'
import { Astrocite } from './Astrocite'
import { BibLatexCslConverter } from './BibLatexCslConverter'
import { BibtexParse } from './BibtexParse'
import { Citation } from './Citation'

const example = `@article {terSteege1243092,
	author = {ter Steege, Hans and Pitman, Nigel C. A. and Sabatier, Daniel and Baraloto, Christopher and Salom{\~a}o, Rafael P. and Guevara, Juan Ernesto and Phillips, Oliver L. and Castilho, Carolina V. and Magnusson, William E. and Molino, Jean-Fran{\c c}ois and Monteagudo, Abel and N{\'u}{\~n}ez Vargas, Percy and Montero, Juan Carlos and Feldpausch, Ted R. and Coronado, Eur{\'\i}dice N. Honorio and Killeen, Tim J. and Mostacedo, Bonifacio and Vasquez, Rodolfo and Assis, Rafael L. and Terborgh, John and Wittmann, Florian and Andrade, Ana and Laurance, William F. and Laurance, Susan G. W. and Marimon, Beatriz S. and Marimon, Ben-Hur and Guimar{\~a}es Vieira, Ima C{\'e}lia and Amaral, I{\^e}da Le{\~a}o and Brienen, Roel and Castellanos, Hern{\'a}n and C{\'a}rdenas L{\'o}pez, Dairon and Duivenvoorden, Joost F. and Mogoll{\'o}n, Hugo F. and Matos, Francisca Dion{\'\i}zia de Almeida and D{\'a}vila, N{\'a}llarett and Garc{\'\i}a-Villacorta, Roosevelt and Stevenson Diaz, Pablo Roberto and Costa, Fl{\'a}via and Emilio, Thaise and Levis, Carolina and Schietti, Juliana and Souza, Priscila and Alonso, Alfonso and Dallmeier, Francisco and Montoya, Alvaro Javier Duque and Fernandez Piedade, Maria Teresa and Araujo-Murakami, Alejandro and Arroyo, Luzmila and Gribel, Rogerio and Fine, Paul V. A. and Peres, Carlos A. and Toledo, Marisol and Aymard C., Gerardo A. and Baker, Tim R. and Cer{\'o}n, Carlos and Engel, Julien and Henkel, Terry W. and Maas, Paul and Petronelli, Pascal and Stropp, Juliana and Zartman, Charles Eugene and Daly, Doug and Neill, David and Silveira, Marcos and Paredes, Marcos R{\'\i}os and Chave, Jerome and Lima Filho, Di{\'o}genes de Andrade and J{\o}rgensen, Peter M{\o}ller and Fuentes, Alfredo and Sch{\"o}ngart, Jochen and Cornejo Valverde, Fernando and Di Fiore, Anthony and Jimenez, Eliana M. and Pe{\~n}uela Mora, Maria Cristina and Phillips, Juan Fernando and Rivas, Gonzalo and van Andel, Tinde R. and von Hildebrand, Patricio and Hoffman, Bruce and Zent, Egl{\'e}e L. and Malhi, Yadvinder and Prieto, Adriana and Rudas, Agust{\'\i}n and Ruschell, Ademir R. and Silva, Natalino and Vos, Vincent and Zent, Stanford and Oliveira, Alexandre A. and Schutz, Angela Cano and Gonzales, Therany and Trindade Nascimento, Marcelo and Ramirez-Angulo, Hirma and Sierra, Rodrigo and Tirado, Milton and Uma{\~n}a Medina, Mar{\'\i}a Natalia and van der Heijden, Geertje and Vela, C{\'e}sar I. A. and Vilanova Torre, Emilio and Vriesendorp, Corine and Wang, Ophelia and Young, Kenneth R. and Baider, Claudia and Balslev, Henrik and Ferreira, Cid and Mesones, Italo and Torres-Lezama, Armando and Urrego Giraldo, Ligia Estela and Zagt, Roderick and Alexiades, Miguel N. and Hernandez, Lionel and Huamantupa-Chuquimaco, Isau and Milliken, William and Palacios Cuenca, Walter and Pauletto, Daniela and Valderrama Sandoval, Elvis and Valenzuela Gamarra, Luis and Dexter, Kyle G. and Feeley, Ken and Lopez-Gonzalez, Gabriela and Silman, Miles R.},
	title = {Hyperdominance in the Amazonian Tree Flora},
	volume = {342},
	number = {6156},
	elocation-id = {1243092},
	year = {2013},
	doi = {10.1126/science.1243092},
	publisher = {American Association for the Advancement of Science},
	abstract = {Introduction Recent decades have seen a major international effort to inventory tree communities in the Amazon Basin and Guiana Shield (Amazonia), but the vast extent and record diversity of these forests have hampered an understanding of basinwide patterns. To overcome this obstacle, we compiled and standardized species-level data on more than half a million trees in 1170 plots sampling all major lowland forest types to explore patterns of commonness, rarity, and richness. A map of Amazonia showing the location of the 1430 Amazon Tree Diversity Network (ATDN) plots that contributed data to this paper. The white polygon marks our delimitation of the study area and consists of 567 1{\textdegree} grid cells (area = 6.29 million km2). Orange circles indicate plots on terra firme; blue squares, plots on seasonally or permanently flooded terrain (v{\'a}rzea, igap{\'o}, swamps); yellow triangles, plots on white-sand podzols; gray circles, plots only used for tree density calculations. Background is from Visible Earth. CA, central Amazonia; EA, eastern Amazonia; GS, Guyana Shield; SA, southern Amazonia; WAN, northern part of western Amazonia; WAS, southern part of western Amazonia. More details are shown in figs. S1 to S3. Methods The ~6-million-km2 Amazonian lowlands were divided into 1{\textdegree} cells, and mean tree density was estimated for each cell by using a loess regression model that included no environmental data but had its basis exclusively in the geographic location of tree plots. A similar model, allied with a bootstrapping exercise to quantify sampling error, was used to generate estimated Amazon-wide abundances of the 4962 valid species in the data set. We estimated the total number of tree species in the Amazon by fitting the mean rank-abundance data to Fisher{\textquoteright}s log-series distribution. Results Our analyses suggest that lowland Amazonia harbors 3.9 {\texttimes} 1011 trees and ~16,000 tree species. We found 227 {\textquotedblleft}hyperdominant{\textquotedblright} species (1.4\% of the total) to be so common that together they account for half of all trees in Amazonia, whereas the rarest 11,000 species account for just 0.12\% of trees. Most hyperdominants are habitat specialists that have large geographic ranges but are only dominant in one or two regions of the basin, and a median of 41\% of trees in individual plots belong to hyperdominants. A disproportionate number of hyperdominants are palms, Myristicaceae, and Lecythidaceae. Discussion The finding that Amazonia is dominated by just 227 tree species implies that most biogeochemical cycling in the world{\textquoteright}s largest tropical forest is performed by a tiny sliver of its diversity. The causes underlying hyperdominance in these species remain unknown. Both competitive superiority and widespread pre-1492 cultivation by humans are compelling hypotheses that deserve testing. Although the data suggest that spatial models can effectively forecast tree community composition and structure of unstudied sites in Amazonia, incorporating environmental data may yield substantial improvements. An appreciation of how thoroughly common species dominate the basin has the potential to simplify research in Amazonian biogeochemistry, ecology, and vegetation mapping. Such advances are urgently needed in light of the \&gt;10,000 rare, poorly known, and potentially threatened tree species in the Amazon. Despite botanical exploration over two centuries, knowledge of the species composition and quantitative distribution of the trees of the Amazonian forest has remained decidedly patchy. Ter Steege et al. (1243092) report the results from a network of 1170 tree plots arrayed across the Amazon Basin and Guiana Shield, in which the species of all trees with stem diameter \&gt;10 centimeters were identified. The tree flora comprised a total of about 16,000 species. However, just 227 very common Amazonian species accounted for half of the trees in the Amazon{\textemdash}the world{\textquoteright}s most diverse forest. The vast extent of the Amazon Basin has historically restricted the study of its tree communities to the local and regional scales. Here, we provide empirical data on the commonness, rarity, and richness of lowland tree species across the entire Amazon Basin and Guiana Shield (Amazonia), collected in 1170 tree plots in all major forest types. Extrapolations suggest that Amazonia harbors roughly 16,000 tree species, of which just 227 (1.4\%) account for half of all trees. Most of these are habitat specialists and only dominant in one or two regions of the basin. We discuss some implications of the finding that a small group of species{\textemdash}less diverse than the North American tree flora{\textemdash}accounts for half of the world{\textquoteright}s most diverse tree community.},
	issn = {0036-8075},
	URL = {https://science.sciencemag.org/content/342/6156/1243092},
	eprint = {https://science.sciencemag.org/content/342/6156/1243092.full.pdf},
	journal = {Science}
}`

export const App: React.FC = () => {
  const [input, setInput] = useState<string>(example)
  const [inputToParse, setInputToParse] = useState<string>()

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      setInputToParse(input)
    },
    [input]
  )

  return (
    <div className={'container'}>
      <h1>BabelBib</h1>

      <p>Compare JavaScript BibTeX Parsers</p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={event => setInput(event.target.value)}
          rows={20}
          cols={50}
        />
        <div>
          <button type={'submit'}>Compare</button>
        </div>
      </form>

      <div>
        {inputToParse && (
          <>
            <Astrocite input={inputToParse} />
            <Citation input={inputToParse} />
            <BibLatexCslConverter input={inputToParse} />
            <BibtexParse input={inputToParse} />
          </>
        )}
      </div>
    </div>
  )
}
