import { useMutation } from '@apollo/client'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { generateData } from '../graphql/__generated__/generateData'
import { generateDataMutation } from '../graphql/queries'

export const Footer = ({ onComplete }: { onComplete: () => Promise<any> }) => {
  const [mutateFunc, { loading }] = useMutation<generateData>(generateDataMutation, {
    onCompleted: onComplete,
    onError: onComplete,
  })
  return (
    <>
      <IconButton onClick={async () => await mutateFunc()} disabled={loading}>
        <AddIcon />
        Generer mer data
      </IconButton>
    </>
  )
}
