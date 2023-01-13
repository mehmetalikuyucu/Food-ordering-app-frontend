import React from 'react'

const Courrier = () => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={'20px'}>
                <Input
                    {...register(adress)}
                    placeholder={adress}
                    borderColor={'black'}></Input>
                <Input
                    {...register(mail, { required: true })}
                    placeholder={mail}
                    borderColor={'black'}></Input>
                {console.log('error object', errors.mail)}
                <Button
                    type='submit'
                    value={'submit'}
                    colorScheme={'blue'}>
                    Create
                </Button>
            </Stack>
        </form>
    )
}

export default Courrier
