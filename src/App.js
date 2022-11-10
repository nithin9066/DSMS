import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSchedule } from "react-icons/ai"
import Input from "./components/Input";
import RadioButton from "./components/RadioButton";
import Select from "./components/Select";
import { subscriptionList } from "./helper/SubscriptionList";
function App() {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true })
  const [conponentList, setconponentList] = useState([]);

  return (
    <div className="h-screen grid grid-cols-9 bg-slate-300 gap-3">
      <div className="col-span-2 bg-white p-3">
        <h1 className="text-blue-500 text-3xl font-bold mb-5 border-b-2 pb-5">DSMS</h1>
        <div className="w-fit">
          <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Collapse
                  icon={AiFillSchedule}
                  label="Manage Schedule"
                  className="space-x-3 text-white/70 font-bold text-lg bg-slate-500 mb-2 rounded-md"
                >
                  <Sidebar.Item href="#" className='font-bold text-slate-600 bg-slate-300 mb-2 rounded-md'>
                    Add Schedule
                  </Sidebar.Item>
                  <Sidebar.Item href="#" className='font-bold text-slate-600 bg-slate-300 mb-2 rounded-md'>
                    View Schedule
                  </Sidebar.Item>
                </Sidebar.Collapse>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      </div>
      <div className="col-span-7 bg-white overflow-auto">
        <div className="py-20 px-10">
          <h2 className="text-xl font-medium text-slate-700 mb-5">Add Schedule</h2>
          <form className="grid grid-cols-2 gap-10">
              <Input type={'text'} reff={register('name_en')} lebel={'Schedule Name'}/>
              <Input type={'text'} reff={register('name_ar')} lebel={'Schedule Name(Arabic)'}/>
              <RadioButton name={'schedule_type'} reff={register('schedule_type')} label1={"Automatic"} label2={"Manual"} value={"Automatic"} value2={"Manual"} label={"Schedule type"} />
              <RadioButton name={'status'} reff={register('status')} label1={'Enable'} label2="Disable" value={"1"} value2={"0"} label={"Status"} />
              <Select setconponentList = {setconponentList} label={'Subscription Plans'} register={register} list={subscriptionList.data.result} />
              <Select label={'Components'} reff={'component_id'} list={conponentList} />
              <Select label={'Mode of learning'} reff={'mode_of_learn_id'} list={conponentList} />
              <Select label={'Session'} reff={'session_id'} list={conponentList} />
              <Select label={'Private / Public'} reff={'is_private'} list={conponentList} />
              <Input type={'date'} reff={register('start_time')} lebel={'Start Date & Time'}/>
              <Input type={'text'} reff={register('session_capacity')} lebel={'Session Capacity'}/>
              <Input type={'text'} reff={register('legal_capacity')} lebel={'Legal Capacity'}/>
              <Select label={'Language'} reff={'language'} list={conponentList} />
              <div></div>
              <button className="py-2 bg-slate-600 rounded-md text-white font-medium">Add Schedule</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
