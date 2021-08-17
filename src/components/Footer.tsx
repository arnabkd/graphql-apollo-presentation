import { useMutation } from '@apollo/client'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/ClearAll'
import { generateData } from '../graphql/__generated__/generateData'
import { generateDataMutation, wipeDataMutation } from '../graphql/queries'
import { wipeData } from '../graphql/__generated__/wipeData'

export const Footer = ({ onComplete }: { onComplete: () => Promise<any> }) => {
  const [generateData, { loading: generateDataLoading }] = useMutation<generateData>(generateDataMutation, {
    onCompleted: onComplete,
    onError: onComplete,
  })

  const [wipeData, { loading : wipeDataLoading }] = useMutation<wipeData>(wipeDataMutation, {
    onCompleted: onComplete,
    onError: onComplete,
  })

  const loading = generateDataLoading || wipeDataLoading

  return (
    <>
      <IconButton onClick={async () => await generateData()} disabled={loading}>
        <AddIcon />
        Generate data
      </IconButton>

      <IconButton onClick={async () => await wipeData()} disabled={loading}>
        <ClearIcon />
        Wipe all data
      </IconButton>
    </>
  )
}
