import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, LineController, Tooltip, CategoryScale, LineElement, PointElement,
    LinearScale, Title, ChartData
} from 'chart.js';
// import { ChartData } from '../utils/types';

type Props = {
    data: ChartData<'line'>;
    vsCurrency: string;
}

ChartJS.register(LineController, Tooltip, LineElement, PointElement, LinearScale, Title, CategoryScale);

const Chart = ({ data, vsCurrency }: Props) => {
    return (
        <div id='chart'>
            <Line
                datasetIdKey='id'
                data={data}
                options={{
                    indexAxis: 'x',
                    responsive: true,
                    aspectRatio: 2,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            ticks: {
                                callback: (value, index, ticks) => {
                                    const parsedValue: number = typeof (value) === 'number' ? value : Number.parseInt(value) as number;

                                    return new Intl.NumberFormat('en-US', { style: 'currency', currency: vsCurrency }).format(parsedValue);
                                }
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: vsCurrency }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }}
            />

        </div>
    )
}

export default Chart