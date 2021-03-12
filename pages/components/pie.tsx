import { ResponsivePie } from '@nivo/pie'

type PieProps = {
  data: {
    id: string
    value: number
    color: string
  }[]
}

const Pie = ({ data }: PieProps) => (
  <ResponsivePie
    data={data}
    innerRadius={0.75}
    padAngle={0}
    cornerRadius={0}
    colors={{ datum: 'data.color' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    enableRadialLabels={false}
    radialLabelsSkipAngle={10}
    radialLabelsTextColor='#333333'
    radialLabelsLinkColor={{ from: 'color' }}
    enableSliceLabels={false}
    sliceLabelsSkipAngle={10}
    sliceLabelsTextColor='#333333'
  />
)

export default Pie
