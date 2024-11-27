import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Tuition.module.css";
import Footer from "../components/Footer";

function Tuition() {
  const [paymentStatus, setPaymentStatus] = useState(false);

  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3>Tuition Fees</h3>
            <p>
              View and manage your tuition fees, payment history, and any
              outstanding balances. Ensure you stay updated with the latest fee
              structure and payment deadlines.
            </p>
            <button
              className={styles.paymentButton}
              onClick={() => setPaymentStatus(true)}
            >
              Make a Payment
            </button>
          </div>

          {paymentStatus && (
            <div className={styles.card}>
              <h3>Payment Status</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.feeTable}>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Payment Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>November 2024</td>
                      <td>N 25,000</td>
                      <td>Paid</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>October 2024</td>
                      <td>N 25,000</td>
                      <td>Paid</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className={styles.noData}>
                        No outstanding payments
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tuition;
