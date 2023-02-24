import { useState } from "react";

import { Modal } from "@components/Modal/Modal";
import formatDate from "@helpers/formatDate";
import formatPrice from "@helpers/formatPrice";

import styles from "./styles.module.scss";

function Card({ item }) {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClick = () => {
    setIsModalActive((prevstylestate) => (prevstylestate = !prevstylestate));
  };

  return (
    <>
      <div className={styles.card} onClick={handleClick}>
        <div className={styles.placeholder}>
          <i className={`ri-image-2-fill ${styles.icon}`}></i>
        </div>
        <div className={styles.content}>
          <p className={styles.location}>
            <i className="ri-map-pin-2-fill"></i> {item.street}
            <span className={styles.postcode}>
              <i className="ri-map-2-fill"></i> {item.outcode}
            </span>
          </p>
        </div>
      </div>

      <Modal isActive={isModalActive} setIsActive={setIsModalActive}>
        <h3>Transactions</h3>
        <ul>
          {item.lrTransactions.map((transaction) => (
            <li key={transaction.id}>
              <p>
                <span>Date: </span>
                {formatDate(transaction.date)}
              </p>
              <p>
                <span>Price: </span>
                {formatPrice(transaction.price)}
              </p>
            </li>
          ))}
        </ul>

        <p className="street">
          <i className="ri-map-pin-2-fill"></i> {item?.street}
          <span>
            <i className="ri-map-2-fill"></i> {item?.outcode}
          </span>
        </p>
      </Modal>
    </>
  );
}

export default Card;
