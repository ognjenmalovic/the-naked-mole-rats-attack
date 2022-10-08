function goInstructions () {
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f f f f f f f f f 
        `)
    game.showLongText("A long time ago in a galaxy far, far away", DialogLayout.Center)
    game.showLongText("horizon student XXX came to his school garden and encountered strange event", DialogLayout.Center)
    game.showLongText("hordes of Naked mole-rats attacked his carrots, cabbage and lettuce", DialogLayout.Center)
    game.showLongText("Defend school garden!!!", DialogLayout.Center)
}
scene.setBackgroundColor(9)
goInstructions()
