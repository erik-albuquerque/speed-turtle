import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '::/components/ui/alert-dialog'

const SpeedTestWarning = () => {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Heads up!</AlertDialogTitle>
          <AlertDialogDescription>
            The test results may differ from your Internet plan's advertised
            speeds, as the measurement is based solely on Cloudflare's standard
            test servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-white dark:bg-neutral-900 dark:text-white">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { SpeedTestWarning }
