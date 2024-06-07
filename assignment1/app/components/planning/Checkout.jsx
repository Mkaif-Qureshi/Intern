import CheckoutBox from './CheckoutBox';

export default function Checkout({ content }) {
    return (
        <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
            {content.map((box, idx) => (
                <CheckoutBox key={idx} boxContent={box} />
            ))}
        </div>
    );
}
