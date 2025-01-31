import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-8B05S5N2WQ";

export const initGA = (): void => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (path: string): void => {
  ReactGA.send({ hitType: "pageview", page: path });
};
