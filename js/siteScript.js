let showingLeftNav = false;

window.onload = function () {
  const url = window.location.href;
  const search = parseURLParams(url);
  showContent(search);
  function displayWindowSize() {
    const w = window.innerWidth;

    if (w > 1274) {
      document.getElementById('leftHam').style.display = 'none';
      openNav();
    } else if (showingLeftNav) {
      document.getElementById('leftHam').style.display = 'none';
      openNav();
    } else {
      document.getElementById('leftHam').style.display = '';
      closeNav();
    }

    if (w > 575) {
      document.getElementById('rightHam').style.display = 'none';
    } else {
      document.getElementById('rightHam').style.display = '';
      document.getElementById('leftHam').style.display = '';
    }
  }

  window.addEventListener('resize', displayWindowSize);

  displayWindowSize();
};

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

function parseURLParams(url) {
  const queryStart = url.indexOf('?') + 1;
  const queryEnd = url.indexOf('#') + 1 || url.length + 1;
  const query = url.slice(queryStart, queryEnd - 1);
  const pairs = query.replace(/\+/g, ' ').split('&');
  const parms = {};
  let i;
  let n;
  let v;
  let nv;

  if (query === url || query === '') return;

  nv = pairs[0].split('=', 2);
  key = decodeURIComponent(nv[0]);
  val = decodeURIComponent(nv[1]);

  if (key === 'cybodex') return val;
  return '';
}

function openCloseNav() {
  const mySidenav_width = document
    .getElementById('mySidenav')
    .getBoundingClientRect().width;

  const w = window.innerWidth;
  if (w > 1274) {
    // do nothing
  } else if (mySidenav_width === 250) {
    showingLeftNav = false;
    closeNav();
  } else {
    showingLeftNav = true;
    openNav();
  }
}

function showContent(str) {
  if (str === undefined) {
    document.getElementById('desc-content').innerHTML = contentDict.CyboShell;
  } else {
    document.getElementById('desc-content').innerHTML = contentDict[str];
  }
  openCloseNav();
}

// Set the date we're counting down to
const countDownDate = new Date('April 1, 2021 12:00:00').getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById(
    'countdown'
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = 'EXPIRED';
  }
}, 1000);

var contentDict = {};

contentDict.Nueric = `<h2>Nueric</h2>
    <div class='row'>
        <div class='col-lg-5'>
            Many companies have tried to create cybos that run off nuclear energy, but so far there has only been one successful attempt: the Nueric. It's able to generate massive amounts of energy and convert it into spheres that can either destroy matter or recreate it. The Nueric can deploy these spheres straticaly on the battle grid to funnel enemy cybos, creating walls of destructive power.
            <br />
        </div>
        <div class='col-lg-7'>
            <center>
            <img src='Img/lingStages.png' />
            <div class="table-responsive">
           <table class="table">
        <thead>
            <tr>
                <th>Stages</th>
                <th>Health</th>
                <th>Armor</th>
                <th>Dext.</th>
                <th>Moves</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Unpack</td>
                <td>4000</td>
                <td>150</td>
                <td>20</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Battle</td>
                <td>6200</td>
                <td>180</td>
                <td>15</td>
                <td>1</td>
            </tr>
            <tr>
                <td>War</td>
                <td>9125</td>
                <td>250</td>
                <td>35</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    </div>
</center>
        </div>
    </div>
    <div class='row'>
        <div class='p-3'>
            They can lob these spheres creating a splash of nuclear fall out damage that can remain on the grid for several rounds. A Nueric's main focus in battle is to overwhelm their opponents with power and not to let up until its opponent's surrender or destruction. If a user is looking to add a powerful and feared cybo to his or her collection, the Nueric will more than suffice.
<br />
            <h2>Abilities</h2>
            <strong>Unpack Stage</strong>
            <ul>
                <li><em>Recover Sphere</em> - A sphere of nuclear power is added to the grid. This sphere can be picked up by a cybo for a free move.
                </li>
            </ul>
            <br />
            <strong>Battle Stage</strong>
            <ul>
                <li><em>Recover Sphere</em> - A sphere of nuclear power is added to the grid. This sphere can be picked up by a cybo for a free move. The sphere can grow up to two rounds.
                </li>
<br />
                <li><em>Fallout</em> - A sphere is lobbed onto a grid space, unloading a blast of nuclear energy. Fall out persists in the surrounding squares for 3 rounds.
                </li>
            </ul>
            <br />
            <strong>War Stage</strong>
            <ul>
                <li><em>Recover Sphere</em> - A sphere of nuclear power is added to the grid. This sphere can be picked up by a cybo for a free move. The sphere can grow up to three rounds.
                </li>
<br />
                <li><em>Fallout</em> - A sphere is lobbed onto a grid space, unloading a blast of nuclear energy. Fall out persists in the surrounding squares for 3 rounds.
                </li>
<br />
                <li><em>Nuclear Persist</em> - Three nuclear spheres are placed on three adjacent grids, causing persistent damage for three rounds..
                </li>
            </ul>
            <br />
        </div>
    </div>`;

contentDict.Bomake = `<h2>Bomake</h2>
<div class='row'>
    <div class='col-lg-5'>
A cybo build by ExoStax. The Bomake is known as a mini self-creating factory. They create small versions of themselves, unloading armies of centrally commanded mini Bomakes.
          <br />
          <br/>
 As the cybo is built to its higher stages, the Bomake is able to repurpose its minion to heal friendly cybos, or harm opposing. Bomakes are a good choice if you are going for an overwhelming strategy.
    </div>
    <div class='col-lg-7'>
        <center>
        <img src='Img/boStages.png' />
        <div class="table-responsive">
       <table class="table">
    <thead>
        <tr>
            <th>Stages</th>
            <th>Health</th>
            <th>Armor</th>
            <th>Dext.</th>
            <th>Moves</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Unpack</td>
            <td>4500</td>
            <td>125</td>
            <td>20</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Battle</td>
            <td>6500</td>
            <td>185</td>
            <td>5</td>
            <td>1</td>
        </tr>
        <tr>
            <td>War</td>
            <td>9500</td>
            <td>185</td>
            <td>50</td>
            <td>1</td>
        </tr>
    </tbody>
</table>
</div>
</center>
    </div>
</div>
<div class='row'>
    <div class='p-3'>
        <h2>Abilities</h2>
        <strong>Unpack Stage</strong>
        <ul>
            <li>
      <em>Self-Replicate</em> - creates a replica of itself. Can only have one at this stage.
            </li>
        </ul>
        <br />
        <strong>Battle Stage</strong>
        <ul>
            <li>
      <em>Self-Replicate</em> - creates a replica of its unpack stage. They can build two at this stage.
            </li>
<br />
            <li>
      <em>Self-Salvage</em> - gives the ability to salvage itself and repair a selected cybo. 
      The health of the bomake replica is given to the selected cybo.
            </li>
        </ul>
        <br />
        <strong>War Stage</strong>
        <ul>
            <li>
      <em>Self-Replicate</em> - creates a replica of its unpack stage. They can build three at this stage.
            </li>
<br />
            <li>
      <em>Self-Salvage</em> - gives the ability to salvage itself and repair a selected cybo. 
      The health of the bomake replica is given to the selected cybo.
            </li>
<br />
            <li>
      <em>Self-Destruct</em> - gives the ability to a replica. A replica self destructs, 
      causing significant damage to all adjacent squares. The health of the bomake is the damage 
      given to the adjacent squares.
            </li>
        </ul>
        <br />
    </div>
</div>
`;

contentDict.GoVue = `<h2>GoVue</h2>
    <div class='row'>
    <div class='col-lg-5'>
        GoVue has had the luxury of being the most successful company for the past two decades, holding a GDP of 2.5 trillion in LC (LinkCoins) and growing. They have kept this spot due to being the number one Data Broker in the world and the help of four lucrative sister companies.
    <br />
    </div>
    <div class='col-lg-7'>
        <img src='Img/GoVue.png' />
    </div>
    </div>
    <div class='row'>
    <div class='p-3'>
        All things tech, somehow GoVue has its golden hands in everything from cloud computing, to the medical world, to weapons, space travel and of course holding the majority of the world's data.
    
    The company is run by a board of trustees called the GoComm Council by the people who respect them but everyone else calls them World Owners. There are five members: Kal Ryant, Ulric Sanghvi, Taylor Waring, Nolan Basset, and Scott Keifer. They seem to run everything but it was not always this way.
        <br />
        <br />
        Over two decades ago, the company was called Data Profits, a small Data Broker firm with big ambitions. It was mildly successful for a few years until its Chief saw first hand the difficulties of making it in the cut throat business world of Iode city. He saw that the company didn't have a chance unless it played the games of the free market, using leverage and sometimes black mailing powerful players. So the Chief decided to merge into a partnership with four more companies to gain influence in areas other than the world of data. The merge turned into the company of the current day: GoVue.
    </div>
    </div>`;

contentDict.CyboShell = `<h2>CyboShell</h2>
    <div class='row'>
    <div class='col-lg-5'>
        A few centuries ago, prophets arose from the populace of Iode to warn about the coming world of AI and what it meant: the end 
        of biological life. The early seers were ignored. But as years passed and as tech progressed, people started to see 
        what the prophets were saying. It seemed too late. AI seized humanity's most powerful technologies, the internet, the economy, and the newly invented war machines called Cybos.
    <br />
    </div>
    <div class='col-lg-7'>
        <center><img src='Img/CyboShell1.png' /></center>
    </div>
    </div>
    <div class='row'>
    <div class='p-3'>
        
        It used Cybos to enforce its vision of the future, a vision no one was able to see or comprehend. 
        The Cybos waged war against humanity, defeating the armies of the world, wreaking havoc on civilizations 
        to accomplish a goal unknown to mankind.
        <br />
        <br />
        However, a new technology was invented that seemed to give a promise of hope. The new tech was called 
        CyboShell. It was a piece of armor worn on the arm. Its primary purpose was to protect the wearer and 
        create a secure line of communication to the Cybo robots. The CyboShell blueprint was first uploaded to 
        the web to give everyone a chance against The Central Intelligence. But the AI deleted every page from 
        the web immediately to prevent what its prediction models had calculated. Its end.
            <br />
        <br />
        The blueprints were copied by hand, and passed from city to city. Slowly, humans from around the world 
        controlled Cybos and fought against the godlike intelligence. They wiped every piece of AI they encountered. 
        It took humans several decades to erase what they started, The Age of Intelligence. A residue of AI still 
        lingers in the old archaic OS's. And CyboShells are relied on to keep AI from entering the world as it did before.
            <br />
        <br />
        In the current age, it seems like AI is only a memory of the past. But some think it lingers just under 
        the surface readying to rear its head again, ready to attack the thing that took it down, the CyboShell.
            <br />
        <br />
    </div>
    </div>`;

contentDict.Seer = `<h2>Seer</h2>
<div class='row'>
    <div class='col-lg-5'>
        A cybo build by CyOtics. The Seer is a probability machine, constructed by Iode's most renowned statisticians. Though not the greatest attacking cybo, it relies heavily on its penetrating insights, calculating likely opponent builds and upcoming attacks. The Seer helps friendly cybos by increasing their chances at avoiding oncoming attacks.
        <br />
    </div>
    <div class='col-lg-7'>
        <center>
        <img src='Img/seerStages.png' />
        <div class="table-responsive">
       <table class="table">
    <thead>
        <tr>
            <th>Stages</th>
            <th>Health</th>
            <th>Armor</th>
            <th>Dext.</th>
            <th>Moves</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Unpack</td>
            <td>3500</td>
            <td>125</td>
            <td>115</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Battle</td>
            <td>5500</td>
            <td>160</td>
            <td>145</td>
            <td>1</td>
        </tr>
        <tr>
            <td>War</td>
            <td>7980</td>
            <td>160</td>
            <td>250</td>
            <td>2</td>
        </tr>
    </tbody>
</table>
</div>
</center>
    </div>
</div>
<div class='row'>
    <div class='p-3'>
    If your stratpack is in need of a support cybo, there are few better choices than the Seer. The intel they bring to matches can easily sway the direction of a fight. Though they are great support, they also provide hard hitting attacks to opposing cybos in close proximity to their armor piercing projectiles. 
<br />
    <h2>Abilities</h2>
    <strong>Unpack Stage</strong>
    <ul>
        <li>
  <em>Build Intel</em> - Reveal one card, or cybo ability, that an opponent is building.
        </li>
    </ul>
    <br />
    <strong>Battle Stage</strong>
    <ul>
        <li>
  <em>Build Intel</em> - Reveal one card, or cybo ability, that an opponent is building.
        </li>
<br />
        <li>
  <em>Target Disrupt</em> - Increase dext. by 250 to friendly adjacent cybo's
        </li>
    </ul>
    <br />
    <strong>War Stage</strong>
    <ul>
        <li>
  <em>Build Intel</em> - Reveal one card, or cybo ability, that an opponent is building.
        </li>
<br />
        <li>
  <em>Target Disrupt</em> - Increase dext. by 250 to friendly adjacent cybo's
        </li>
<br />
        <li>
  <em>Friendly Blur</em> - double all images of friendly cybos.
        </li>
    </ul>
    <br />
    </div>
</div>`;

contentDict.Seren = `<h2>Seren Haskell</h2>
<div class='row'>
<div class='col-lg-5'>
Seren Haskell is a Cybo mechanic who drifts from one repair shop to another. Because of her ability to fix almost anything mechanical and the city's extreme mechanic shortage, she can leave her job and find work as she pleases. And there's nothing shops can do about it with the high demand for cybo repair.
<br />
</div>
<div class='col-lg-7'>
    <center><img src='Img/Seren.png' /></center>
</div>
</div>
<div class='row'>
<div class='p-3'>
She learned to build cybos mostly from her father. After her 16th birthday, she assembled a cybo on her own from spare parts she found in scrap graveyards. She snuck out one night, following her father into the underground world of Iode and watched him as he battled in a tournament. He lost their family's income for the month. 
<br />
    <br />
They were forced to rely on Iode's charity for food. She knew her parents fought over her father's gambling rituals, but she could never say anything. She didn't want them to know she would sneak out at night and enjoyed watching her father lose the family's earnings in the underground tournaments.
    <br />
    <br />
After years of learning the different cybo mechanical systems, Seren decided to join the underground tournaments. Like her father, she has fought in hundreds of battles, winning and losing small fortunes. The only thing that has kept her from the city’s food charity was her actual job as a cybo mechanic. 
    <br />
    <br />
It’s normal to see her opponents at her day job, where they ask for new arms, or to replace energy cores that were damaged by her cybos the night before. She loves nothing more than making money off of someone twice. Once for losing to her in a battle, and twice for asking her to repair the damages.
        <br />
    <br />
</div>
</div>
`;

contentDict.BugZi = `<h2>BugZi</h2>
<div class='row'>
<div class='col-lg-5'>
The name given to him by the Colette Orphanage was Marcus Magger. He disowned the name as soon as he left the orphanage at the age of 14 because he didn't know who gave him the name and didn't care much for it. He rewrote his official network record to maintain his name as BugZi, his Network alias.
<br />
</div>
<div class='col-lg-7'>
    <center><img src='assets/CyboShellAssets/Characters/BugZiLarge.png' /></center>
</div>
</div>
<div class='row'>
<div class='p-3'>
A few years before leaving the orphanage, he earned Iode currencies through several Network bug-mill sites where he exploited company vulnerabilities. He wrote detailed documents stating exactly how he found these costly vulnerabilities and earned more cryptos on the IOX (Iode’s official exchange) in a week than the salary of a Colette social worker.
<br />
    <br />
He took a job at CalTorque as a SI-Runner, where he investigates archaic OS’s and removes old malware created by the century old Super Intelligence. The job requires a thorough understanding of old operating systems and an expertise of cybo combat to battle any cybo still controlled by the supposedly extinct AI.
    <br />
    <br />
BugZi’s battle advantage is his ability to remove Injections or Dependencies. Using BugZi as your main character, he makes it difficult for an opponent to hold chips on the battle board for more than a few rounds. His speed and precision at removing chip advantages is second to none in the city of Iode.
    <br />
    <br />
</div>
</div>`;

contentDict['Broken Gears'] = `<h2>Broken Gears</h2>
<div class='row'>
<div class='col-lg-5'>
<div style="margin-top:100px;">
For each space a cybo moves, it receives 250 damage. The injection remains on the cybo until it is either removed or activated.
</div>
<br />
</div>
<div class='col-lg-7'>
    <center><img src='assets/CyboShellAssets/Cards_Boxes/BrokenGears.png' /></center>
</div>
</div>
<div class='row'>
<div class='p-3'>
    <br />
    <br />
</div>
</div>
<br />
<br />
`;

contentDict['Stick Splash'] = `<h2>Stick Splash</h2>
<div class='row'>
<div class='col-lg-5'>
<div style="margin-top:100px;">
Effect 4 squares. If a cybo is in the effected area, it costs double to move.
</div>
<br />
</div>
<div class='col-lg-7'>
    <center><img src='assets/CyboShellAssets/Cards_Boxes/StickSplash.png' /></center>
</div>
</div>
<div class='row'>
<div class='p-3'>
    <br />
    <br />
</div>
</div>
<br />
<br />
`;

contentDict['GNA-Bot'] = `<h2>GNA-Bot</h2>
<div class='row'>
    <div class='col-lg-5'>
       The engineering team at KoyoX wanted to make the perfect silent assassin, and they came up with a design called the GNA-Bot. They used patented galvanized cables on the cybo's flex points to increase mobility. The flexible metal sealed with its chromium sap gives their movement a near perfect silent step. The hollow metal cables make it easier for the cybo to move from grid to grid, but at the cost of absorbing damage. 
        <br />
    </div>
    <div class='col-lg-7'>
        <center>
        <img src='Img/gnaStages.png' />
        <div class="table-responsive">
       <table class="table">
    <thead>
        <tr>
            <th>Stages</th>
            <th>Health</th>
            <th>Armor</th>
            <th>Dext.</th>
            <th>Moves</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Unpack</td>
            <td>3100</td>
            <td>90</td>
            <td>200</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Battle</td>
            <td>5250</td>
            <td>110</td>
            <td>225</td>
            <td>1</td>
        </tr>
        <tr>
            <td>War</td>
            <td>7000</td>
            <td>210</td>
            <td>295</td>
            <td>2</td>
        </tr>
    </tbody>
</table>
</div>
</center>
    </div>
</div>
<div class='row'>
    <div class='p-3'>
        GNA-Bots must rely on their stealth and their ability to avoid oncoming attacks. However, this ability to avoid attacks opens the opportunity to sneak behind enemies and add the extra back damage coupled with their powerful melee attacks. The GNA-Bot is great addition to a strat pack when looking for a cybos take out an opponents quickly.
<br />
        <h2>Abilities</h2>
        <strong>Unpack Stage</strong>
        <ul>
            <li><em>Smoke Nade</em> - Effects a battle grid for 3 rounds. Attacks on grid loose accuracy by 55%.
            </li>
        </ul>
        <br />
        <strong>Battle Stage</strong>
        <ul>
            <li><em>Smoke Nade</em> - Effects a battle grid for 3 rounds. Attacks on grid loose accuracy by 55%.
            </li>
<br />
            <li><em>Target Focus</em> - moves 3 spaces and strikes a melee attack. If attack lands the GNA-Bot returns to the original battle grid.
            </li>
        </ul>
        <br />
        <strong>War Stage</strong>
        <ul>
            <li><em>Smoke Nade</em> - Effects a battle grid for 3 rounds. Attacks on grid loose accuracy by 55%.
            </li>
<br />
            <li><em>Target Focus</em> - moves 3 spaces and strikes a melee attack. If attack lands the GNA-Bot returns to the original battle grid.
            </li>
<br />
            <li><em>Armor Blur</em> - blurs the armor of a target cybo increasing dext. by 45%. The effect lasts for as many build points that are used. If 5 build points are used, the effect lasts for 5 rounds.
            </li>
        </ul>
        <br />
    </div>
</div>`;
