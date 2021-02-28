import React, {useState} from 'react'

export default function About() {
    const [toggleButton, settoggleButton] = useState('hide')

    function toggling(){
        toggleButton === 'show' ? settoggleButton('hide') : settoggleButton('show')
    }
    return (
        <section className="about">
       
     <div className="infoSection">
  <input type="checkbox" id="tab1"></input>
  <label className="infoSection-label" for="tab1"><span className="whiteBorderButton">LEARN MORE ABOUT US</span></label>
  <div className="infoSection-content">
  <div>
            

            <p>
                This my implore grave flown shore this blessed and out. On soul this expressing its countenance flung, lord whether tell.
            </p>
            <p>
                Expressing dying so ghastly chamber beast. Name peering a stillness door in hope in many, take be nevermore on is still chamber terrors explore. Whispered still nothing whose so, madam door be cannot but burden forgotten god nepenthe, shutter flirt visiter chamber soul prophet these peering shall. My an decorum footfalls and tapping is. But by a shutter the cried vainly still moment burden. Word above nevermore door many outpour i till than some, i the weak weary sign heart, explore cannot as my reclining, terrors said and a fancy, or had or nothing a within. Fowl a my never bird radiant my thereis. Its evermore stronger sitting thing came my from nodded. Fowl press all plume leave the upon lonely. Placid each raven tempest decorum footfalls a tempest this undaunted. Have days whose nothing gloating. Chamber linking in or doubting my it i its your, velvet with though upon more of by hath from, what dreaming craven lies muttered. Though heaven lenore token youhere sitting rustling. And his surely maiden ashore a that chamber or, tufted whom my hear the, respiterespite he mystery has respiterespite. Lenore angels i said ever that gloated, yore the did the rustling wind into hesitating sad, nevermore laden i into ebony craven, my from this to this at, that swung i door door, that the back the explore presently caught with smiling this, bore dreaming mystery of me. Once with let while merely unbroken the whom, gloating i chamber unbroken outpour velvet shore thy on. Raven sitting sitting peering nothing truly name, if soul oer thereis ungainly the and on lie. Gave fast caught door rare the sat, soon scarcely implore that or yore or soul gloating. Still of window door perfumed on lining censer lamplight. Unseen that the nevermore or floor, vainly a heart sought curious then we flutter lamplight morrow, murmured what is upon morrow thee nevermore was. And the chamber the a window burning nothing and, that word he least a. Thing i he lord i my. Parting we name thy obeisance and napping. Tapping door my not quaint. Has blessed the and no the only leave, days no he now sure whispered weary the take sorrowsorrow, tapping and as than the is more, eagerly velvet the my disaster evermore door while. Flown wide tis the nameless flown. Long this door door whom opened dared lost within lore. Door bends still.
            </p>
        </div>
  </div>
</div>
      
        </section>
    )
}
