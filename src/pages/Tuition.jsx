import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Tuition.module.css";

function Tuition() {
  return (
    <div className={styles.tuitionContainer}>
      <PageNav />
      <div className={styles.tuitionContent}>
        <h2>Tuition Fees</h2>
        <p>
          View and manage your tuition fees, payment history, and any
          outstanding balances. Ensure you stay updated with the latest fee
          structure and payment deadlines.
        </p>
        <button className={styles.paymentButton}>Make a Payment</button>
      </div>
      <Footer />
    </div>
  );
}

export default Tuition;
