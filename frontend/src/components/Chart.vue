<template>
    <div>
    <v-table height="300px" fixed-header @click="klik">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in desserts" :key="item.x">
          <td>{{ item.x }}</td>
          <td>{{ item.y }}</td>
          <td><v-icon><span :data-delete="JSON.stringify(index)" class="delete mdi mdi-delete"></span></v-icon></td>
        </tr>
      </tbody>
    </v-table>
    <hr>

     <v-tooltip text="Tooltip">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">Hover Over Me</v-btn>
        </template>
      </v-tooltip>
<br/><br/><hr/><br/><br/><br/>

<div class="majitele"> 
  <h2>Vlastníci, jiní oprávnění</h2>
<table summary="Vlastníci, jiní oprávnění" cellspacing="0" class="zarovnat stinuj  zarovnat stinuj  vlastnici">
	 <tbody>
		 <tr>
			<th>Vlastnické právo</th><th class="right">Podíl</th>
		</tr>
		<tr>			<td>SJM Adam Petr a Adamov&#225; Viera Ing. arch., Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~a6wj1zYMxYD6s-6elp0AgBNGF0W1VPydjLU93mZGvFkmzyJOVbYfiN3GA0YRLzieXhsZxzuNBxZ-vLqTw4YUEOKLkSiVQPqgadzw8BXg2xCzyFvtQ9TI01yjjtj8l_jVoaXPlWuqF-GAdlBxzAjL2uecQb1tvdsMoSofirf4GBbFu0QoLJUqCJtmis-ebdeJUkSgJWeVzP5sXGQE5C0Bsg==" title="Informace o jednotce">78/5</a>, <a href="/ZobrazObjekt.aspx?encrypted=NAHL~dB8CBOHqzqcdEBtCrjaBORXFZtSfINr4ppkR5DHR9pWDd1SMdhzXCn8aDS_Y6eFCqlJVUsfkZEWZAZucQvk-Gg_XVPiijXWlwUVQFZzWEA8hTkM1BZSwqfcqqhbVKmMn-1bAl_5qWpxyYxWifsFk27ETqrSI7k_Wfb6RMEqOjt0MpHY-GCJVSe1ZORIVbrVsTuEsCSaEqcGZ9X7K91mylA==" title="Informace o jednotce">78/9</a></td><td class='right'>1075/10969</td>		 </tr>
		 <tr>			<td>Brejchov&#225; Stanislava Ing., Javorov&#225; 314, 25250 Vestec<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~KlP9KT7h8rjPoEpw6jig9oFqsQMrSB79Ls_cRK-5XL2HJfZale5kaB7M7cswhgXz-hpQAaulPdDkq4MES-Mjl7FcEuFnTuASZTxllpQaSUmZtBCWV_nyfoUozFGyqbjUXlIFxvukbLsZGjvJpG2YzeocSyeTB-ewdX5zjmzweiBkeXkSEnUEoaop1u0NJpWyOPJkZhYHzspKpmVqQBMWTw==" title="Informace o jednotce">78/12</a></td><td class='right'>403/10969</td>		 </tr>
		 <tr>			<td>Čakarova Dobrinka Mgr., Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~BkzCdue1xjUzWuYpUI_Fl2EBC-1DzzjHjFlhhoAKEyxDjDbeyOgdi0_dLZdp6zklLMjske55ih1TwMWS_7utlUjMP5LqPKHeVuRoaJk9PzfTyRb2Qs_lQvVDRMZr9l_i9ZxBS5ssriUQM7MS1Sbk33XwIUmomYmao-5hhY62FD1qtdw99_SyDu_6kR7WoA6Uvxj-Q3ZR1YhjpF0v8KIAqw==" title="Informace o jednotce">78/7</a></td><td class='right'>562/10969</td>		 </tr>
		 <tr>			<td>Dudkov&#225; Eva, Běl&#225; 26, Velk&#253; Hlav&#225;kov, 36452 Valeč<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~Z8X6ZfJG1zp2LylpxCsrK8SLxiFCvY0JdMJ0UT84Vm2ZgdO55pc0Hd_b3ou8ck-GbG4U8JkEv6VLiE30N84SZNqaz5UrRmqBrlu8DNETHw72tWz4TmW1vtCLufzezgaIy6IxNuMGRzJeZV5P9cwBzdKfQgOC8n43CpARai4yzREFSL5XVkAtIwceK0Sf1Rg_XPVdt6E6XGE7oG2zSXmpkA==" title="Informace o jednotce">78/16</a></td><td class='right'>867/10969</td>		 </tr>
		 <tr>			<td>Farn&#225; Lenka  DiS., Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~6QODDVFjCl9bo8dsjzxjpicWLZAY1BMr0-sswR_UN8nF5yFZpSl4Z1CnzVwirC_rDpE81UBGD0Uiqe2B9xbCi9NfdFeNRBTtd71LRtr0oRTw9BGdRgHz5oNvTSsrGEEhK_QRKDMNZIN9nmZ6Z-VhoFpf8igyaxaMwLO9ZyinazAtf61neDHEBR4XzUPhDGsYkiSFCWRwbQobW8yIqrHi_w==" title="Informace o jednotce">78/17</a></td><td class='right'>1021/10969</td>		 </tr>
		 <tr>			<td>SJM Fišer Miroslav a Fišerov&#225; Petra Bc., Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~wRVD1_mPdbIN7xUzv-9uQUeZEsGRzS9y6go5yM-HawXGDsTTKrPx6kAN3Aj4r-FaKcMAnHbf9oOMC2frgvrrglK3DEVS5tqQblRzKvi_bDJYE_bidk8gqldCAddBH2JNwOTSovorhQjS0wRdw6sXzstFOKb53YfT_kBX55qjPSP5CT-n_9lSzYjc0p2r_8-CjXoMP5JlJ9mCr_Qf5oWugQ==" title="Informace o jednotce">78/14</a></td><td class='right'>1020/10969</td>		 </tr>
		 <tr>			<td>Gottwald Petra Ing., Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~gN7S8iHFZfR6YaIWIT0mNF_hxVwUsWArhlcB5CSeSubFKcev1qWjc083BbdQHySRL2Ob6ljunLKogBiY-BoriyeJhhGTZGtDrBEqD6crhHjO_oeO1__kmrYIN9Z18zgd0B3Ab0-wbw4RuEHppPvYbFKLhxwW-ptGtyUEEdRBwtaqO5G6-6A8c5Rqa70raUyPeG8k350QGTsdtyAP8DZBmQ==" title="Informace o jednotce">78/6</a></td><td class='right'>73/1567</td>		 </tr>
		 <tr>			<td>Jezlov&#225; Karina, Šlikova 2400/62, Břevnov, 16900 Praha 6<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~ZMZFyFVMJjdMW2b5gTHJMs5hf4NTS3MCH6NEVJ6asMw6cTK7I0FVGvMm9qZZO9rfkw3180-oVUdHDeqqTEwM5_gY4BNtAkYrvXNTpVTRb9tgSv3xmLBngXVJXRTKKG890K1QnU8mB7LnFe2XcXM30FuHC8rwmxk-xfPCuk0CqEDFPiipmkI0jTq1Yikr3phPqfmtwDPDoYcgd4iI8UP0sg==" title="Informace o jednotce">78/15</a></td><td class='right'>867/21938</td>		 </tr>
		 <tr>			<td>Jirkovsk&#225; Kristina, Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~SpV77hmrMq_URwVCU2n1TNwcpDQrnaPOTbHhs6Pwf5QTgZ56PHWrzr9LwA8JEShVfjeFAdWV2OAokfJ9USP1fs5LYhFvb7jqpgtU-aBxhYT8BAxg-xhkc8dhqXCFOEmCsYtldlCw9tUNuoOaStdpqbeqZtIY1_185lrfiJX8YAgshTCHu5b8g2W1iLikAdAcCpngAH0137Pmr6DOHGARng==" title="Informace o jednotce">78/15</a></td><td class='right'>867/21938</td>		 </tr>
		 <tr>			<td>Kantůrek Petr, Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~STDHuICp8DSoD0REdNMBiJp3P-TG5OBq5qDTQ1RAss48_7yNt2wSim9mLsqJRAuuw7GORaihNJbVSJ0r7UmSf2lc6jQ9rBupIxCqzpOXRXpGw8EmL4-9tBLPfdL2Gx4L7K7878Yu5EyvJfwcjRJrIkDiBNuVNG-plRcPdpyQaPq7B8eHKzvsAqqhUJVlyItYxTUtknlJaL2bOzbMMHrmTQ==" title="Informace o jednotce">78/1</a></td><td class='right'>73/1567</td>		 </tr>
		 <tr>			<td>Kantůrkov&#225; Jana, Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~Ve5iwVQ9LMvSBxZ6HLG0Jyo09F555nks2jegHk0j4D6ja7QXszGWK4TrhW9SpTxFsL3LEAfYl7-wQ0QMQgww0nxlENRbueX2N8c7KTg0BzI-ZAOru8E82DXyVdK7ph1pKWD96HFBhFmqoLLEjAsQyviNjBRaRuK6dYMSCrQ1im9Q2HKTcCk8s2XRRf6pL2Hf4hYsoike081kXaTWyGEubg==" title="Informace o jednotce">78/2</a></td><td class='right'>410/10969</td>		 </tr>
		 <tr>			<td>Krčm&#225;řov&#225; Zuzana, U zelen&#233;ho pt&#225;ka 1158/5, Kunratice, 14800 Praha 4<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~tkAb4S2v8egw0lAfl9llLaiKXXoqB2ofpPvqi4ItQkjGhC-tWPkcXAr2RouKeYnVIbKhQqs8Z3lvEkjx44L7lRsmKh4r8CNRsfjK5pmuw5kTJ4RlevE3mR6qIR8e-djcjG0ybOzXv7yXDVYYykVGH92NReJX2VVUiWqpUSBnV8o7Ri10eb15LIOuNkI6PZ2bJB2hMECw8ZDd-baIomzCrQ==" title="Informace o jednotce">78/10</a></td><td class='right'>410/10969</td>		 </tr>
		 <tr>			<td>LAC Company s.r.o., Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~vt44cM0ZXEzgwdOLTciQS9iUzzpN6Rf_6FyVE2M4RsngEC-ipZ8mdhxLT_8XoQcA8YPfMYNcOUWear7O1KXNrK4YBoirHj1FZ52OSIuQjSIq2kP90CEGPfChqT9AMQjaLv-yI8pkAakZoPPB3JUrOzZeEWBjmc3_CgE4j4COljLcS8dfFEpUG_LnrY2LNJzoh8pUeztiISxYknK55keL6w==" title="Informace o jednotce">78/13</a></td><td class='right'>562/10969</td>		 </tr>
		 <tr>			<td>SJM Medek Richard Mgr. a Medkov&#225; Jitka, Na Koc&#237;nce 2139/5, Dejvice, 16000 Praha 6<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~3oMaTbyI6hAX558AY3ZesaXTQ4mPuDHQJbnl-wOqyf8veNMpUAgFcZzN6vRnitsc72pBvmlQMA7vkmPI6OKy1krg211g_6kFyyMVv6JWZCSBG7xaX7sAaNivLEZrS_G8pfTD8B1Z4IKTaPUk5WcH3Fl681Z4DQNaR7X_GXBPJuMu1JBMwf32pp_XKiD58pzMKcISvvHXue3rU-WCwbknIQ==" title="Informace o jednotce">78/8</a></td><td class='right'>403/10969</td>		 </tr>
		 <tr>			<td>SJM Nykl Ladislav a Nyklov&#225; Jana Ing., Mol&#225;kova 581/28, Karl&#237;n, 18600 Praha 8<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~0YGNCiE2ui6gHkI6kUgu6zeQCRk1VJCG0WVOohqJGFwO_mN05h-TG68xhtUJDCqQpmxYkqt4ueu5Y709ieTuVY2AGq2owg_M4gvbtaJAumVF2RVLEgtzmI16Y92iy8RWa5_sq9bffVRYptaSvfKjLNqCg7pd1lNip4p6HriR3Rmrn8lre4DsrCAoeKSAzftQcmazzcMqox2p8yUB2UFEgA==" title="Informace o jednotce">78/4</a></td><td class='right'>841/10969</td>		 </tr>
		 <tr>			<td>Pl&#225;šilov&#225; Alena, Za Branou 811, 39501 Pacov<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~dyfE8eU2s7iQMhCyELxabmlpfQD7U2mJCFdBPk4EXiJPQIhsDybGZPmnN7RdwtP_Jmq9TECniS4DlLnFL0ZVJjwq1XfBcGjw73697efb35vVJP3jcNdWsfgUJLomBI5hETM9Xh6Nc9SdDBWugm12qaUsSVPhxunaZ2gsq_d3NhVhZcPUxgrSTJN0qy7qdg265sNSjGawoW6K41DVTbC9rA==" title="Informace o jednotce">78/11</a></td><td class='right'>95/1567</td>		 </tr>
		 <tr>			<td>Šustr Kl&#225;ra, Platanov&#225; 78, Kozinec, 25265 Holubice<br />Jednotka: <a href="/ZobrazObjekt.aspx?encrypted=NAHL~PTHjexPlD64R-02Z7v-vlCoMVAy5Dp7KlFipZLiRridRZ0TtgYyIGgXIcvlXDLY6yJ5v-_2llcrpyD2kJ6jsr08tuf-npzrbzFdnnXHnZo6OJxfU858WweOQMB6C-RcJ_J3Mz2P1wSZEE3jjMVPinhVHw99euFDm1ul0W1DO9v9VIJ9bO_KjM-atmL7FtMEQrEXWkXz5YPtHKEn0Am4Q6Q==" title="Informace o jednotce">78/3</a></td><td class='right'>841/10969</td>		 </tr>
	 </tbody>
</table>  





</div>


</div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          desserts: [
      { x: '2024-01-06', y: 20 },
      { x: '2024-02-06', y: 21 },
      { x: '2024-02-26', y: 25 },
      { x: '2024-04-01', y: 40 },
      { x: '2024-05-15', y: 49 },
          ],
        }
      },
      methods: {
        klik(e) {
          if (e.target.dataset) {
            var data = JSON.parse(e.target.dataset.delete)
            console.log(data)
          }
        },
      },
    }
  </script>