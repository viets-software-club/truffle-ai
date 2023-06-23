import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import { HeaderOne, HeaderTwo } from './heading'
import Paragraph from './paragraph'

const Docs = () => (
  <Page>
    <div className="flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6">
      <h1 className="text-20 font-medium">Documentation</h1>
    </div>

    <div className="block border-b border-gray-800 px-6">
      <div className="flex flex-col gap-2">
        <HeaderOne text="Introduction" />

        <HeaderTwo text="Purpose of the System" />
        <Paragraph size="last">
          What is your application all about? Write a short introduction with an elevator pitch and
          include the main users and/or stakeholders.
        </Paragraph>
        <hr className="my-1 h-px border-t-0 bg-neutral-100 opacity-25 dark:opacity-25" />

        <HeaderOne text="Requirements" />
        <HeaderTwo text="Analysis Object Model" />
        <Paragraph>Include and describe your Analysis Object Model here.</Paragraph>

        <HeaderTwo text="Activity Diagram" />
        <Paragraph>
          Include and describe your Activity Diagram which points out the system behavior.
        </Paragraph>

        <hr className="my-1 h-px border-t-0 bg-neutral-100 opacity-25 dark:opacity-25" />
        <HeaderOne text="System Design" />
        <HeaderTwo text="Overview" />
        <Paragraph>
          Include and describe the Workflow here in terms of the main components and technologies
          used.
        </Paragraph>
        <HeaderTwo text="Hardware/Software Mapping" />
        <Paragraph>
          Include and describe your Deployment or Infrastructure Diagram here. Describe the specific
          hardware, software and protocols for your system.
        </Paragraph>
        <HeaderTwo text="Persistent Data Management" />
        <Paragraph>
          Persistent data management describes the persistent data stored by the system and the data
          management infrastructure required for it. This section typically includes the description
          of data schemes, the selection of a database, and the description of the encapsulation of
          the database.
        </Paragraph>
        <HeaderTwo text="Persistent Data Management" />

        <Paragraph>
          Access control and security describe the user model of the system in terms of an access
          matrix. This section also describes security issues, such as the selection of an
          authentication mechanism, the use of encryption, and the management of keys.
        </Paragraph>
        <hr className="my-1 h-px border-t-0 bg-neutral-100 opacity-25 dark:opacity-25" />
        <HeaderOne text="Administrator Manual" />
        <HeaderTwo text="Infrastructure Setup" />
        <Paragraph>
          Describe the setup of the infrastructure in terms of hardware, software, and protocols so
          it can be configured by a system administrator at the client site. (incl. virtual
          machines, software packages etc. Describe the installation and startup order for each
          component.
        </Paragraph>
        <HeaderTwo text="Deployment and Configuration" />
        <Paragraph>
          Describe the steps a system administrator needs to take to install your system on the
          infrastructure described in the section above. If necessary explain any parameters like
          domains, IP addresses, ports, etc. within your system that need to be configured.
        </Paragraph>
        <HeaderTwo text="Known Issues &amp; Workarounds" />
        <Paragraph>
          Describe any known problems and workarounds with respect to infrastructure and deployment.
          For example, explain that you used a mock database.
        </Paragraph>
        <HeaderTwo text="Third-party Components" />
        <Paragraph>
          List all third-party components you use (e.g. libraries, frameworks) and include their
          version numbers. If you used open-source components add a link to the website and/or the
          license terms. If you used commercial software refer to the product information at the
          manufacturer`s site.
        </Paragraph>

        {/* <NumberedBulletedList items={item} /> */}

        <ol className="list-inside list-decimal">
          <li>Item in list…</li>
          <li>Item in list…</li>
          <li>Item in list…</li>
        </ol>

        {/* <h1 className="py-1 text-20 font-semibold text-gray-400">Introduction</h1>
            <h2 className="py-1 text-16 font-semibold text-gray-400">Purpose of the System</h2>
              <p className="text-14 font-light">What is your application all about? Write a short introduction with an elevator pitch and include the main users and/or stakeholders.</p>
          <br/>

          <h1 className="py-1 text-20 font-semibold text-gray-300">Requirements</h1>
            <h2 className="py-1 text-16 font-semibold text-gray-300">Analysis Object Model</h2>
              <p className="text-14 font-light">Include and describe your Analysis Object Model here.</p>
            
            <h2 className=" py-1 text-16 font-semibold text-gray-300">Activity Diagram</h2>

              <p className="text-14 font-light">Include and describe your Activity Diagram which points out the system behavior.</p>
              <div className='divide-x'/>
          <br/>
*/}
      </div>

      <div className="py-20"> </div>

      <div>
        <h1 className="py-1 text-20 font-medium">Introduction</h1>
        <br />
        <h3 className="py-1 text-18" id="purpose">
          Purpose of the System
        </h3>

        <p className="text-14">
          What is your application all about? Write a short introduction with an elevator pitch and
          include the main users and/or stakeholders.
        </p>
      </div>
      <br />
      <h1 className="py-1 text-20 font-medium">Requirements</h1>
      <br />

      <h3 className="text-18" id="analysisobjectmodel">
        Analysis Object Model
      </h3>

      <p className="text-16">Include and describe your Analysis Object Model here.</p>
    </div>
  </Page>
)

export default withAuth(Docs)
