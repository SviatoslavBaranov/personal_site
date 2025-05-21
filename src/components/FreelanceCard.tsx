import { useModalStore } from "@/store/modalStore";
const FreelanceCard: React.FC = () => {
    const { openModal } = useModalStore();

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">Freelance</h2>
            <ul className="space-y-4 text-gray-700">
                <li>✔ Fast delivery in 2 weeks</li>
                <li>✔ Responsive on all devices</li>
                <li>✔ Business-oriented design</li>
                <li>✔ 1-month free support</li>
            </ul>
            <button
                onClick={() => openModal('freelance')}
                className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500"
            >
                Place an order
            </button>
        </div>
    );
};

export default FreelanceCard;