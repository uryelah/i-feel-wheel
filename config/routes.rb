Rails.application.routes.draw do

  get 'feeling_pages/home'

  get 'happy/playful/aroused', to: 'feeling_pages#aroused'

  get 'happy/playful/cheeky', to: 'feeling_pages#cheeky'

  get 'happy/content/free', to: 'feeling_pages#free'

  get 'happy/content/joyful', to: 'feeling_pages#joyful'

  get 'happy/interested/curious', to: 'feeling_pages#curious'

  get 'happy/interested/inquisitive', to: 'feeling_pages#inquisitive'

  get 'happy/proud/successful', to: 'feeling_pages#successful'

  get 'happy/proud/confident', to: 'feeling_pages#confident'

  get 'happy/accepted/respected', to: 'feeling_pages#respected'

  get 'happy/accepted/valued', to: 'feeling_pages#valued'

  get 'happy/powerful/courageous', to: 'feeling_pages#courageous'

  get 'happy/powerful/creative', to: 'feeling_pages#creative'

  get 'happy/peaceful/loving', to: 'feeling_pages#loving'

  get 'happy/peaceful/thankful', to: 'feeling_pages#thankful'

  get 'happy/trusting/sensitive', to: 'feeling_pages#sensitive'

  get 'happy/trusting/intimate', to: 'feeling_pages#intimate'

  get 'happy/optimistic/hopeful', to: 'feeling_pages#hopeful'

  get 'happy/optimistic/inspired', to: 'feeling_pages#inspired'

  get 'sad/lonely/isolated', to: 'feeling_pages#isolated'

  get 'sad/lonely/abandoned', to: 'feeling_pages#abandoned'

  get 'sad/vulnerable/victimized', to: 'feeling_pages#victimized'

  get 'sad/vulnerable/fragile', to: 'feeling_pages#fragile'

  get 'sad/despair/grief', to: 'feeling_pages#grief'

  get 'sad/despair/powerless', to: 'feeling_pages#powerless'

  get 'sad/guilty/ashamed', to: 'feeling_pages#ashamed'

  get 'sad/guilty/remorseful', to: 'feeling_pages#remorseful'

  get 'sad/depressed/empty', to: 'feeling_pages#empty'

  get 'sad/depressed/inferior', to: 'feeling_pages#sad_inferior'

  get 'sad/hurt/disappointed', to: 'feeling_pages#disappointed'

  get 'sad/hurt/embarrassed', to: 'feeling_pages#sad_embarrassed'

  get 'disgusted/repelled/hesitant', to: 'feeling_pages#hesitant'

  get 'disgusted/repelled/horrified', to: 'feeling_pages#horrified'

  get 'disgusted/awful/detestable', to: 'feeling_pages#detestable'

  get 'disgusted/awful/nauseated', to: 'feeling_pages#nauseated'

  get 'disgusted/disappointed/revolted', to: 'feeling_pages#revolted'

  get 'disgusted/disappointed/appalled', to: 'feeling_pages#appalled'

  get 'disgusted/disapproving/embarrassed', to: 'feeling_pages#embarrassed'

  get 'disgusted/disapproving/judgemental', to: 'feeling_pages#judgmental'

  get 'angry/critical/dismissive', to: 'feeling_pages#dismissive'

  get 'angry/critical/skeptical', to: 'feeling_pages#skeptical'

  get 'angry/distant/numb', to: 'feeling_pages#numb'

  get 'angry/distant/withdrawn', to: 'feeling_pages#withdrawn'

  get 'angry/frustrated/annoyed', to: 'feeling_pages#annoyed'

  get 'angry/frustrated/infuriated', to: 'feeling_pages#infuriated'

  get 'angry/aggressive/hostile', to: 'feeling_pages#hostile'

  get 'angry/aggressive/provoked', to: 'feeling_pages#provoked'

  get 'angry/mad/jealous', to: 'feeling_pages#jealous'

  get 'angry/mad/furious', to: 'feeling_pages#furious'

  get 'angry/bitter/violated', to: 'feeling_pages#violated'

  get 'angry/bitter/indignant', to: 'feeling_pages#indignant'

  get 'angry/humiliated/ridiculed', to: 'feeling_pages#ridiculed'

  get 'angry/humiliated/disrespected', to: 'feeling_pages#disrespected'

  get 'angry/let down/resentful', to: 'feeling_pages#resentful'

  get 'angry/let down/betrayed', to: 'feeling_pages#betrayed'

  get 'fearful/threatened/exposed', to: 'feeling_pages#exposed'

  get 'fearful/threatened/nervous', to: 'feeling_pages#nervous'

  get 'fearful/rejected/persecuted', to: 'feeling_pages#persecuted'

  get 'fearful/rejected/excluded', to: 'feeling_pages#excluded'

  get 'fearful/weak/insignificant', to: 'feeling_pages#insignificant'

  get 'fearful/weak/worthless', to: 'feeling_pages#worthless'

  get 'fearful/insecure/inferior', to: 'feeling_pages#inferior'

  get 'fearful/insecure/inadequate', to: 'feeling_pages#inadequate'

  get 'fearful/anxious/worried', to: 'feeling_pages#worried'

  get 'fearful/anxious/overwhelmed', to: 'feeling_pages#overwhelmed'

  get 'fearful/scared/frightened', to: 'feeling_pages#frightened'

  get 'fearful/scared/helpless', to: 'feeling_pages#helpless'

  get 'bad/bored/indifferent', to: 'feeling_pages#indifferent'

  get 'bad/bored/apathetic', to: 'feeling_pages#apathetic'

  get 'bad/busy/pressured', to: 'feeling_pages#pressured'

  get 'bad/busy/rushed', to: 'feeling_pages#rushed'

  get 'bad/stressed/overwhelmed', to: 'feeling_pages#bad_overwhelmed'

  get 'bad/stressed/out of control', to: 'feeling_pages#out_of_control'

  get 'bad/tired/sleepy', to: 'feeling_pages#sleepy'

  get 'bad/tired/unfocussed', to: 'feeling_pages#unfocussed'

  get 'surprised/startled/shocked', to: 'feeling_pages#shocked'

  get 'surprised/startled/dismayed', to: 'feeling_pages#dismayed'

  get 'surprised/confused/disillusioned', to: 'feeling_pages#disillusioned'

  get 'surprised/confused/perplexed', to: 'feeling_pages#perplexed'

  get 'surprised/amazed/astonished', to: 'feeling_pages#astonished'

  get 'surprised/amazed/awe', to: 'feeling_pages#awe'

  get 'surprised/excited/eager', to: 'feeling_pages#eager'

  get 'surprised/excited/energetic', to: 'feeling_pages#energetic'

  root 'feeling_pages#home'
end
