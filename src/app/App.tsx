import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { Header } from 'widgets/Header'


const App = () => {

    return (
        <div className={classNames('app', {}, ['wrapper'])}>
            <Suspense fallback="">
                <Header />
                <div className='content-page'>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App