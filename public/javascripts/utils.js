export function getPlayerHtml(name, balance, index, folded) {

  return folded ? `<div class="player ">
        <div class="text-secondary">${name}</div>
        <div class="player-circle responsive-player-circle me-1 opacity-25">
            <div class="bi-person-fill player-icon responsive-player-icon opacity-25"></div>
        </div>
        <div class="player-balance responsive-player-balance opacity-25">$ ${balance}</div>
        </div>` : `<div class="player">
        <div class="text-secondary">${name}</div>
        <div class="player-circle responsive-player-circle me-1">
        <div class="bi-person-fill player-icon responsive-player-icon"></div>
        </div>
        <div class="player-balance responsive-player-balance">$  ${balance}</div>
        </div>`
}

export function getPlayerCardsHtml(index, playerAtTurn, rank1, rank2, suit1, suit2) {

  let cardColor1;
  let suitstyle1;
  let cardColor2;
  let suitstyle2;

  switch (suit1) {
    case 1:
      cardColor1 = "black-text";
      suitstyle1 = "bi-suit-club-fill"
    case 2:
      cardColor1 = "black-text";
      suitstyle1 = "bi-suit-spade-fill"
      break;
    case 4:
      cardColor1 = "red-text";
      suitstyle1 = "bi-suit-heart-fill"
    case 3:
      cardColor1 = "red-text";
      suitstyle1 = "bi-suit-diamond-fill";
      break;
  }

  switch (suit2) {
    case 1:
      cardColor2 = "black-text";
      suitstyle2 = "bi-suit-club-fill"
    case 2:
      cardColor2 = "black-text";
      suitstyle2 = "bi-suit-spade-fill"
      break;
    case 4:
      cardColor2 = "red-text";
      suitstyle2 = "bi-suit-heart-fill"
    case 3:
      cardColor2 = "red-text";
      suitstyle2 = "bi-suit-diamond-fill";
      break;
  }

  return playerAtTurn == index ? `<div class="card responsive-cards">
    <div class="card-icon ${suitstyle1} ${cardColor1} responsive-card-suit"></div>
    <div class="card-text ${cardColor1} responsive-card-text">${rank1}</div>
    </div>
    <div class="card responsive-cards">
    <div class="card-icon ${suitstyle2} ${cardColor2} responsive-card-suit"></div>
    <div class="card-text ${cardColor2} responsive-card-text">${rank2}</div>
    </div>` : `<div class="bg-transparent">
    <svg class="responsive-hiddencard" viewBox="0 0 305 318" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="123.661" width="192" height="268" rx="25" transform="rotate(20 123.661 0)" fill="#2DD4BF" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M95.6109 33H25C11.1929 33 0 44.1929 0 58V276C0 289.807 11.1929 301 25 301H125.372L36.4511 268.635C23.4767 263.913 16.787 249.567 21.5093 236.593L95.6109 33Z"
            fill="#2DD4BF" />
    </svg>
    </div>`
}

export function calculateCoinsHtml(amount) {
  let amountLeft = amount;
  const coinValues = [1000, 500, 100, 50, 10];
  let html = '';

  coinValues.forEach(coinValue => {
    const amountOfCoins = Math.floor(amountLeft / coinValue);
    amountLeft -= amountOfCoins * coinValue;

    let outlineColor, fillColor;

    switch (coinValue) {
      case 1000:
        fillColor = "#5F5F5F";
        outlineColor = "#FFFFFF";
        break;
      case 500:
        fillColor = "#763968";
        outlineColor = "#FFFFFF";
        break;
      case 100:
        fillColor = "#242424";
        outlineColor = "#FFFFFF";
        break;
      case 50:
        fillColor = "#286343";
        outlineColor = "#FFFFFF";
        break;
      case 10:
        fillColor = "#1E5FBF";
        outlineColor = "#FFFFFF";
        break;
    }

    for (let i = 0; i < amountOfCoins; i++) {
      html += `
          <div class="coin" style="top: ${i * -5}px;">
            <svg class="responsive-coins" viewBox="0 0 281 281" fill="${fillColor}" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_64_21)">
                <circle cx="132.5" cy="132.5" r="128.5" fill="${fillColor}" />
              </g>
              <path
                d="M150.587 51L115.389 50.2886C115.389 50.2886 98.7339 8.57325 100.077 8.10756C100.714 7.88681 108.975 4.45369 130.414 4.02834C151.853 3.60298 165 8.10756 165 8.10756L150.587 51Z"
                fill="${outlineColor}" />
              <path
                d="M114.413 214L149.611 214.711C149.611 214.711 166.266 256.427 164.923 256.892C164.286 257.113 156.025 260.546 134.586 260.972C113.147 261.397 100 256.892 100 256.892L114.413 214Z"
                fill="${outlineColor}" />
              <path
                d="M68.8208 79.3841L52.9734 105.41C52.9734 105.41 8.55938 98.8571 8.73746 97.6175C8.82188 97.0299 10.5142 87.3072 19.4235 71.0254C28.3328 54.7435 36.8615 46.5987 36.8615 46.5987L68.8208 79.3841Z"
                fill="${outlineColor}" />
              <path
                d="M195.513 186.738L211.36 160.712C211.36 160.712 255.774 167.265 255.596 168.505C255.512 169.092 253.82 178.815 244.91 195.097C236.001 211.379 227.472 219.523 227.472 219.523L195.513 186.738Z"
                fill="${outlineColor}" />
              <path
                d="M55.2805 161.485L69.4274 188.473C69.4274 188.473 40.9352 223.168 39.9644 222.377C39.5042 222.002 32.0419 215.544 22.6742 199.521C13.3066 183.499 10.7178 171.993 10.7178 171.993L55.2805 161.485Z"
                fill="${outlineColor}" />
              <path
                d="M211.751 108.202L197.135 81.4651C197.135 81.4651 226.821 45.6877 227.805 46.4617C228.272 46.8286 234.854 53.1434 244.5 69C254.146 84.8566 255.805 96.9616 255.805 96.9616L211.751 108.202Z"
                fill="${outlineColor}" />
              <path
                d="M240.898 135.08C239.745 195.227 190.052 243.05 129.905 241.898C69.7585 240.745 21.9346 191.052 23.0874 130.905C24.2403 70.7585 73.9333 22.9346 134.08 24.0874C194.227 25.2403 242.05 74.9333 240.898 135.08Z"
                fill="${fillColor}" />
              <defs>
                <filter id="filter0_d_64_21" x="0" y="0" width="281" height="281" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                  <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_64_21" />
                  <feOffset dx="8" dy="8" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_21" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_21" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        `;
    }
  });

  return `
      <div class="stack-amount-container bg-transparent">
        <div class="coin-stack">
          ${html}
        </div>
        <div class="amount responsive-amount"> $${amount}</div>
      </div>
    `;
}