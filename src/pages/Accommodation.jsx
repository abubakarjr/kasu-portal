import PageNav from "../components/PageNav";
import styles from "./Accommodation.module.css";

function Accommodation() {
  return (
    <div className={styles.accommodationContainer}>
      <PageNav />
      <div className={styles.accommodationContent}>
        <h2>Accommodation Services</h2>
        <p>
          Manage your housing application, view available rooms, and submit
          requests for accommodation changes.
        </p>
        <form className={styles.accommodationForm}>
          <div className={styles.formGroup}>
            <label htmlFor="applicationStatus">Application Status</label>
            <select id="applicationStatus" name="applicationStatus">
              <option value="applied">Applied</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="roomPreferences">Room Preferences</label>
            <input
              type="text"
              id="roomPreferences"
              name="roomPreferences"
              placeholder="E.g., Single, Shared"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              placeholder="Enter any specific requests here..."
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Accommodation;
