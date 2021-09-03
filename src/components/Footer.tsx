import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/ClearAll'
import { useGenerateDataMutation } from '../graphql/generated/generateData.generated'
import { useWipeDataMutation } from '../graphql/generated/wipeData.generated'

export const Footer = ({ onComplete }: { onComplete: () => Promise<any> }) => {

  const [generateData, { loading: generateDataLoading }] = useGenerateDataMutation(
    {onCompleted: onComplete, onError: onComplete}
  )

  const [wipeData, { loading : wipeDataLoading }] = useWipeDataMutation({
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
