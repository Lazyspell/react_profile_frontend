import { QuoteItem } from "../quotes-item/quotes-item.component";
import Carousel from "react-material-ui-carousel";

import "./quotes-container.styles.scss";

export const QuotesContainer = ({ quotes }) => {
    return (
        <>
            <h1 className="quote-title">Favorite Quotes</h1>

            <Carousel className="quote-container">
                {quotes.map((quote, index) => (
                    <QuoteItem key={index + 1} inputQuotes={quote} />
                ))}
            </Carousel>
        </>
    );
};
