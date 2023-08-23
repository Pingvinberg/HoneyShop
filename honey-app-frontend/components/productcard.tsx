import React from 'react';

type ProductProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
};

import Image from 'next/image';

const ProductCard: React.FC<ProductProps> = ({ imageUrl, title, description, price }) => {
    return (
        <div className="card">
            <div className="card-img-top">
                <Image src={imageUrl} alt={title} width={300} height={300} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-price">{price}</p>
                <button type="button" className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
