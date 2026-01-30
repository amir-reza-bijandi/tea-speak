const TIMEOUT = 5000;

type Varinat = 'info' | 'error' | 'success' | 'warning';
type Alert = {
	id: symbol;
	text: string;
	variant: Varinat;
};

class AlertStore {
	alerts = $state<Alert[]>([]);
	sendAlert(variant: Varinat, text: string) {
		const id = Symbol();
		this.alerts.push({
			id,
			text,
			variant
		});
		setTimeout(() => {
			this.alerts = this.alerts.filter((alert) => alert.id !== id);
		}, TIMEOUT);
	}
}
export const alertStore = new AlertStore();
