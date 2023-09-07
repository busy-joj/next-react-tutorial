import ModalProvider from '@/app/components/ModalProvider'
import { StyledEngineProvider } from '@mui/material'

export default function Providers({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <ModalProvider>{children}</ModalProvider>
        </StyledEngineProvider>
    )
}
