import { ResponsiveBar } from '@nivo/bar'

type BarChartProps = {
  data: {
    state: string
    burger: number
    burgerColor: string
    sandwich: number
    sandwichColor: string
  }[]
}

const BarChart = ({ data }: BarChartProps) => (
  <ResponsiveBar
    data={data}
    keys={['burger', 'sandwich']}
    indexBy='state'
    margin={{ top: 30, right: 0, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode='grouped'
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderRadius={5}
    borderWidth={4}
    borderColor='#fff'
    axisTop={null}
    axisRight={{}}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      tickValues: 3,
      format: (v) => `${v}%`,
    }}
    gridYValues={[25, 50, 75, 100]}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    maxValue={100}
    enableLabel={false}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: '#777777',
            strokeWidth: 0.5,
          },
        },
      },
    }}
  />
)

export default BarChart
